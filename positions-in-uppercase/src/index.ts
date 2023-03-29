export function getUpperCaseLetterPositions(word: string): number[] {
  if (word.length > 0) {
    if (word[0] == word[0].toUpperCase()) {
      return [0];
    }

    if (word.length > 1) {
      if (word[1] == word[1].toUpperCase()) {
        return [1];
      }
    }
  }

  return [];
}
