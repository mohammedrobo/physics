import "server-only";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
};

export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];

export const isValidLocale = (locale: string): locale is Locale => {
  return locales.includes(locale as Locale);
};

export const getDictionary = async (locale: Locale) => {
  if (!isValidLocale(locale)) {
    return dictionaries["en"]();
  }
  return dictionaries[locale]();
};
