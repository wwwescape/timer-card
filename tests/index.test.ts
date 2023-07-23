// Mocks
import { createMock } from "ts-auto-mock";
import fetchMock from "jest-fetch-mock";
import LocalStorageMock from './testdata/localStorageMock';

// Models
import { HomeAssistant, NumberFormat, TimeFormat } from 'custom-card-helpers';
import TimerCard from '../src/index';
import { TimerCardConfig } from '../src/types/timer-card-types';
import { getRenderString, getRenderStringAsyncIndex } from './utils';
import { LitElement, PropertyValues } from 'lit';

describe('Testing index file function setConfig', () => {
    const card = new TimerCard();
    const hass = createMock<HomeAssistant>();
    hass.locale = {
        language: 'NL',
        number_format: NumberFormat.comma_decimal,
        time_format: TimeFormat.language
    }

    const localStorageMock = new LocalStorageMock();
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    beforeEach(() => {
        localStorageMock.clear();
        fetchMock.resetMocks();
        jest.useFakeTimers();
    });

    beforeAll(() => {

    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('Calling render without hass and config should return empty html', () => {
        // Act
        const result = card.render();

        // Assert
        const htmlResult = getRenderString(result);
        expect(htmlResult).toMatch('');
    }),
        test('Passing empty config should throw error', () => {
            // Arrange
            const config: TimerCardConfig = {
                type: 'timer-card',
            }

            // Act & Assert
            expect(() => card.setConfig(config)).toThrowError('Please define a date or a entity.');
        }),
        test('Passing empty date to the config should throw error', () => {
            // Arrange
            const config: TimerCardConfig = {
                type: 'timer-card',
                date: ''
            }

            // Act & Assert
            expect(() => card.setConfig(config)).toThrowError('Please define a date or a entity.');
        }),
        test('Passing empty entity to the config should throw error', () => {
            // Arrange
            const config: TimerCardConfig = {
                type: 'timer-card',
                entity: ''
            }

            // Act & Assert
            expect(() => card.setConfig(config)).toThrowError('Please define a date or a entity.');
        }),
        test('Calling shouldUpdate with config should return true', () => {
            // Arrange
            const config: TimerCardConfig = {
                type: 'timer-card',
                title: 'Test',
                entity: 'sample-entity'
            }
            const props: PropertyValues = new Map([['config', config]]);

            // Act
            const result = card['shouldUpdate'](props);

            // Assert
            expect(result).toBeTruthy();
        }),
        test('Calling getCardSize with type should return card size', () => {
            // Arrange
            const config: TimerCardConfig = {
                type: 'timer-card',
                title: 'Test',
                entity: 'sample-entity'
            }

            // Act
            card.setConfig(config);
            card.hass = hass;

            // Assert
            expect(card.getCardSize()).toBe(6);
        }),
        test('Passing empty config should throw warning', () => {
            // Arrange
            card.card.render = jest.fn().mockImplementationOnce(() => { throw new Error('Error for warning'); });

            // Act
            const result = card.render();

            // Assert
            const htmlResult = getRenderString(result);
            expect(htmlResult).toMatch('<hui-warning>Error: Error for warning</hui-warning>');
        }),
        test('Setting cardValues should trigger update and values should be set', () => {
            // Arrange
            // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
            const updateSpy = jest.spyOn(LitElement.prototype as any, 'update').mockImplementationOnce(() => { });

            // Act
            card.properties = new Map([['races', []]]);

            // Assert
            expect(updateSpy).toHaveBeenCalled();
            expect(card.properties).toEqual(new Map([['races', []]]));
        }),
        test('Calling render with warning should show warning', async () => {
            // Arrange
            card.warning = 'Error for warning';

            // Act
            const result = card.render();

            // Assert
            const htmlResult = getRenderString(result);
            expect(htmlResult).toMatch('<ha-card elevation="2"> <hui-warning>Error for warning</hui-warning> <h1 class="card-header">Test</h1> </ha-card>');
        })
})

