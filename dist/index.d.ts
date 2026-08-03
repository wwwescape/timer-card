import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import { TimerCardConfig } from './types/timer-card-types';
import { CSSResult, HTMLTemplateResult, LitElement, PropertyValues } from 'lit';
import { BaseCard } from './cards/base-card';
export default class FormulaOneCard extends LitElement {
    _hass?: HomeAssistant;
    config?: TimerCardConfig;
    card: BaseCard;
    warning: string;
    set properties(values: Map<string, unknown>);
    get properties(): Map<string, unknown>;
    constructor();
    private _cardValues?;
    static getConfigElement(): Promise<LovelaceCardEditor>;
    setConfig(config: TimerCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    set hass(hass: HomeAssistant);
    static get styles(): CSSResult;
    render(): HTMLTemplateResult;
    getCardSize(): number;
}
