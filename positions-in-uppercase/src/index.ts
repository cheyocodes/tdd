export function getUpperCaseLetterPositions(word: string): number[] {
  let i = 0;
  if (word.length > 0) {
    if (word[i] == word[i].toUpperCase()) {
      return [0];
    }

    i += 1;
    if (word.length > 1) {
      if (word[i] == word[i].toUpperCase()) {
        return [i];
      }
    }
  }

  return [];
}
