import { PropertyValues } from "lit";
import { TimerCardConfig } from "./types/timer-card-types";
import TimerCard from ".";
export declare const hasConfigOrCardValuesChanged: (config: TimerCardConfig, node: TimerCard, changedProps: PropertyValues) => boolean;
export declare const checkConfig: (config: TimerCardConfig) => void;
export declare const reduceArray: <T>(array?: T[], number?: number) => T[];
