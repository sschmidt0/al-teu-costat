export const isAlphabetic = (text: string) => {
  return /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(text);
};

export const isValidCity = (city: string) => {
  return (
    typeof city === "string" && city.trim().length > 0 && isAlphabetic(city)
  );
};
