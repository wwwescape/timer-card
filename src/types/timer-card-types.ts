import { HomeAssistant, LovelaceCardConfig } from 'custom-card-helpers';

export interface TimerCardConfig extends LovelaceCardConfig {
    title?: string;
    date?: string;
    entity?: string;
    reverse?: boolean;
    hass?: HomeAssistant;
}

export interface ValueChangedEvent {
    detail: {
        value: {
            itemValue: string;
            parentElement: {
                configValue: string;
            };
        }
    };
    target: {
        value: string;
        configValue: string;
        checked?: boolean;
    };

}

export interface Translation {
    [key: string]: string;
}

export interface LocalStorageItem {
    data: string,
    created: Date
}

export interface CardProperties {
    [key: string]: unknown;
}

export interface SelectChangeEvent {
    target: {
        value: string;
    }
}