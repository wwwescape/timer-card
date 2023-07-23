// Mocks
import { createMock } from "ts-auto-mock";
import TimerCard from "../../src";

// Models
import { TimerCardConfig } from "../../src/types/timer-card-types";

// Importing test data
import Timer from "../../src/cards/timer";

describe('Testing base-card file', () => {
    const parent = createMock<TimerCard>({ 
        config: createMock<TimerCardConfig>()
    });

    test.each`
    key | expected
    ${'days'}, ${'दिन'}
    `('Calling translation should return correct translation', ({ key, expected }) => { 
        // Arrange
        parent.config.translations = {  
            "days" : "दिन"
        };

        // Act
        const card = new Timer(parent);

        // Assert
        expect(card.translation(key)).toBe(expected);
    })
});