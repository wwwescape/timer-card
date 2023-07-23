import { html, HTMLTemplateResult } from "lit-html";
import { BaseCard } from "./base-card";
import { asyncReplace } from 'lit/directives/async-replace.js';
import { HomeAssistant } from "custom-card-helpers";
import TimerCard from "..";

export default class Timer extends BaseCard {
    hass: HomeAssistant;
    defaultTranslations = {
        'days': 'd',
        'hours': 'h',
        'minutes': 'm',
        'seconds': 's',
        'timer_complete': 'Timer Completed',
        'timer_not_started': 'Timer Not Started'
    };

    constructor(parent: TimerCard) {
        super(parent);
    }

    cardSize(): number {
        return 6;
    }

    isValidDate(dateObject: Date): boolean {
        return dateObject instanceof Date && !isNaN(dateObject.getTime());
    }

    getFormattedDate(dateObject: Date): string {
        const now = new Date().getTime();
        const dateDifference = this.config.reverse ? now - dateObject.getTime() : dateObject.getTime() - now;

        const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

        return `${days}${this.translation('days')} ${hours}${this.translation('hours')} ${minutes}${this.translation('minutes')} ${seconds}${this.translation('seconds')} `;
    }

    getEntityDate(dateObject: string): Date {
        const [datePart, timePart] = dateObject.split(' ');

        const [year, month, day] = datePart.split('-').map(Number);
        const [hour, minute, second] = timePart.split(':').map(Number);

        return new Date(year, month - 1, day, hour, minute, second);
    }

    async *runTimer(dateObject: Date, reverse: boolean) {
        if (reverse) {
            while (new Date() > dateObject) {

                yield this.getFormattedDate(dateObject);

                await new Promise((r) => setTimeout(r, 1000));
            }

            yield this.translation('timer_not_started');
        } else {
            while (dateObject > new Date()) {

                yield this.getFormattedDate(dateObject);

                await new Promise((r) => setTimeout(r, 1000));
            }

            yield this.translation('timer_complete');
        }
    }

    render(): HTMLTemplateResult {
        let dateObject;

        if (this.config.date) {
            const configDate = new Date(this.config.date);
            if (this.isValidDate(configDate)) {
                dateObject = configDate;
            } else {
                throw new Error('Please define a valid date.');
            }
        } else if (this.config.entity) {
            const entityDate = new Date(this.getEntityDate(this.config.hass.states[this.config.entity].state));
            if (this.isValidDate(entityDate)) {
                dateObject = entityDate;
            } else {
                throw new Error('Please define a valid entity.');
            }
        }

        const timer = this.runTimer(dateObject, this.config.reverse);

        return html`<table>
                        <tr>
                            <td class="text-center">
                                <h1>${asyncReplace(timer)}</h1>
                            </td>
                        </tr>
                    </table>`;
    }
}
