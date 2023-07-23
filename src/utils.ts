import { HomeAssistant } from 'custom-card-helpers';
import { PropertyValues } from "lit";
import { TimerCardConfig, LocalStorageItem } from "./types/timer-card-types";
import TimerCard from ".";
import { BaseCard } from "./cards/base-card";

export const hasConfigOrCardValuesChanged = (config: TimerCardConfig, node: TimerCard, changedProps: PropertyValues) => {
    if (changedProps.has('config')) {
        return true;
    }

    const oldHass = changedProps.get('_hass') as HomeAssistant;
    if (oldHass && config.entity) {
        return oldHass.states[config.entity] !== config.hass.states[config.entity];
    }

    const card = changedProps.get('card') as BaseCard;
    if (card && card.parent) {
        return card.parent.properties !== node.properties;
    }

    const cardValues = changedProps.get('cardValues') as Map<string, unknown>;
    if (cardValues) {
        return cardValues != node.properties;
    }

    return false;
};

export const checkConfig = (config: TimerCardConfig) => {
    if ((config.date === '' || config.date === null || config.date === undefined) && (config.entity === '' || config.entity === null || config.entity === undefined)) {
        throw new Error('Please define a date or a entity.');
    }
};

export const reduceArray = <T>(array?: T[], number?: number) => {
    if (array === undefined) {
        return [];
    }

    return number ? array.slice(0, number) : array;
}