export const removeMoedaSpecialChars = (value: string): string => {
  if (value == null) return null;
  const result = value
    .replace(/[A-Z]\s/gi, "")
    .replace(/r\$/gi, "")
    .replace(/\./g, "")
    .replace(/,/g, ".");
  return result;
};
