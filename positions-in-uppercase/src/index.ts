// Production code

function isUpperCaseCharAt(index: number, word: string) {
  return word[index] === word[index].toUpperCase();
}

export function getUpperCaseLetterPositions(word: string, i = 0): number[] {
  i = i || 0;

  if (word.length > i) {
    if (isUpperCaseCharAt(i, word)) {
      return [i].concat(getUpperCaseLetterPositions(word, i + 1));
    }

    return getUpperCaseLetterPositions(word, i + 1);
  }

  return [];
}
