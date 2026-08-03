import { HomeAssistant } from "custom-card-helpers";
import { HTMLTemplateResult } from "lit-html";
import TimerCard from "..";
import { CardProperties, TimerCardConfig, Translation } from "../types/timer-card-types";
export declare abstract class BaseCard {
    parent: TimerCard;
    config: TimerCardConfig;
    hass: HomeAssistant;
    constructor(parent: TimerCard);
    translation(key: string): string;
    abstract render(): HTMLTemplateResult;
    abstract cardSize(): number;
    abstract defaultTranslations: Translation;
    protected getProperties(): {};
    protected getParentCardValues(): {
        properties: CardProperties;
        cardValues: Map<string, unknown>;
    };
}
