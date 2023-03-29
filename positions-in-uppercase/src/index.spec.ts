import { getUpperCaseLetterPositions } from './index';

describe('getUpperCaseLetterPositionns', () => {
  it('should return is defined', () => {
    expect(getUpperCaseLetterPositions).toBeDefined();
  });

  it('should return emptyin case of empty input', () => {
    expect(getUpperCaseLetterPositions('')).toEqual([]);
  });

  it('ignores lowercase characters', () => {
    expect(getUpperCaseLetterPositions('c')).toEqual([]);
  });

  it('finds the index of the uppercase char', () => {
    expect(getUpperCaseLetterPositions('C')).toEqual([0]);
    expect(getUpperCaseLetterPositions('aC')).toEqual([1]);
  });
});
