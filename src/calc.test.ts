import { expect, describe, it } from 'vitest';
import { sum } from './calc';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
