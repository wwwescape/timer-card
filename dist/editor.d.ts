import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { CSSResult, LitElement } from "lit";
import { TemplateResult } from "lit-html";
import { TimerCardConfig } from "./types/timer-card-types";
export declare class FormulaOneCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private config?;
    setConfig(config: TimerCardConfig): void;
    get _title(): string;
    get _date(): string;
    get _entity(): string;
    get _reverse(): boolean;
    protected generateCheckbox(configValue: string, label: string, checked: boolean): TemplateResult;
    protected render(): TemplateResult;
    private _valueChangedSelect;
    private _valueChanged;
    static get styles(): CSSResult;
}
