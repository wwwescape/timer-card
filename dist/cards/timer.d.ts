import { HTMLTemplateResult } from "lit-html";
import { BaseCard } from "./base-card";
import { HomeAssistant } from "custom-card-helpers";
import TimerCard from "..";
export default class Timer extends BaseCard {
    hass: HomeAssistant;
    defaultTranslations: {
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
        timer_complete: string;
        timer_not_started: string;
    };
    constructor(parent: TimerCard);
    cardSize(): number;
    isValidDate(dateObject: Date): boolean;
    getFormattedDate(dateObject: Date): string;
    getEntityDate(dateObject: string): Date;
    runTimer(dateObject: Date, reverse: boolean): AsyncGenerator<string, void, unknown>;
    render(): HTMLTemplateResult;
}
