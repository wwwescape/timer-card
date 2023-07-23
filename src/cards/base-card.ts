import { HomeAssistant } from "custom-card-helpers";
import { HTMLTemplateResult } from "lit-html";
import TimerCard from "..";
import { CardProperties, TimerCardConfig, Translation } from "../types/timer-card-types";

export abstract class BaseCard {
    parent: TimerCard;
    config: TimerCardConfig;
    hass: HomeAssistant;

    constructor(parent: TimerCard) {
        this.config = parent.config;
        this.hass = parent._hass;
        this.parent = parent;
    }

    translation(key: string): string {

        if (!this.config.translations || Object.keys(this.config.translations).indexOf(key) < 0) {
            return this.defaultTranslations[key];
        }

        return this.config.translations[key];
    }

    abstract render(): HTMLTemplateResult;

    abstract cardSize(): number;

    abstract defaultTranslations: Translation;

    protected getProperties() {
        const cardProperties = this.parent.properties?.get('cardValues') as CardProperties;
        return {};
    }

    protected getParentCardValues() {
        const cardValues = this.parent.properties ?? new Map<string, unknown>();
        const properties = cardValues.get('cardValues') as CardProperties ?? {} as CardProperties;
        return { properties, cardValues };
    }
}
