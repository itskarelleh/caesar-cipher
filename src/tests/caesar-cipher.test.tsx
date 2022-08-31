import { caesarCipher } from '../caesar-cipher/caesar-cipher';

test('What a string!, 5 returns Bmfy f xywnsl!', () => {
    expect(caesarCipher("What a string!", 5)).toBe("Bmfy f xywnsl!");
});