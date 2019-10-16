const MAX_TEXT_LENGTH = 35;

export const createSubText = (text: string) => {
  if (text.length > MAX_TEXT_LENGTH) {
    return text.substring(0, MAX_TEXT_LENGTH) + "...";
  }
  return text;
};
