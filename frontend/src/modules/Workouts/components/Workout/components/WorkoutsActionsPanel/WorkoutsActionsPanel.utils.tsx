export const removeEmojiAndSpaceFromSelectedValue = (selectedValue: string): string =>
  selectedValue
    .replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '')
    .replaceAll('/', '')
    .trim();
