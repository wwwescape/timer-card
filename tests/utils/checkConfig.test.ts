import { checkConfig } from '../../src/utils';
import { TimerCardConfig } from '../../src/types/timer-card-types';

describe('Testing util file function checkConfig', () => {
    test('Passing empty config should throw error', () => {
        const config: TimerCardConfig = {
            type: 'timer-card'
        }

        expect(() => checkConfig(config)).toThrowError('Please define a date or a entity.');
    })
})

