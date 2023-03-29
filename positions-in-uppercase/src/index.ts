export function getUpperCaseLetterPositions(word: string, i = 0): number[] {
  i = i || 0;

  if (word.length > i) {
    if (word[i] == word[i].toUpperCase()) {
      return [i].concat(getUpperCaseLetterPositions(word, i + 1));
    }

    return getUpperCaseLetterPositions(word, i + 1);
  }

  return [];
}
