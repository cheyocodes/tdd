import { romanConverter } from './index';

describe('test', () => {
  it("should return '' when passing 0", async () => {
    expect(romanConverter(0)).toBe('');
  });
});
