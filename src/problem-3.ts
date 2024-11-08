const countWordOccurrences = (sentence: string, word: string) => {
  const sentenceInLowerCase: string = sentence.toLowerCase();
  const wordInLowercase: string = word.toLowerCase();
  const words = sentenceInLowerCase.split(/\W+/);
  const occurceWords = words.filter((wrd) => wrd === wordInLowercase);
  return occurceWords ? occurceWords.length : 0;
};
