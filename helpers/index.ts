export const capitalized = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const uniqueId = (): string => {
  return Math.random().toString(36).slice(2);
};
