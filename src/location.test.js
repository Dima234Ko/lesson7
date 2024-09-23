/* eslint-disable no-undef */
import { main } from './location';

describe('main function', () => {
  it('should return an object with coordinates', async () => {
    const result = await main();
    expect(result).toBeInstanceOf(Object);
    expect(result).toHaveProperty('lat');
    expect(result).toHaveProperty('lon');
  });
});