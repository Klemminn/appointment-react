import { useEffect, useRef } from "react";

import { merge } from "lodash-es";

import coreIS from "./is.json";
import { createLocaleStore, LocaleCode } from "./localeStore";

type CoreTranslationKey = keyof typeof coreIS;

type Translations = {
  [key in string]: string;
};

type GenericTranslationMap = {
  [key in LocaleCode]?: Translations;
};

type TranslationMap = GenericTranslationMap & {
  is: Translations;
};

export type TranslationsOverride<T extends TranslationMap> = {
  translationsOverride?: { [key in keyof T["is"]]?: string };
};

const coreTranslations = {
  is: coreIS as Translations,
};

let currentTranslations: TranslationMap = coreTranslations;
let currentLocale: LocaleCode = "en";

let localeStore = createLocaleStore();

type Settings = {
  persistKey?: string;
  translations: TranslationMap;
};

const useSettings = ({ persistKey, translations }: Settings) => {
  const isStoreInitialized = useRef(!Boolean(persistKey));
  if (!isStoreInitialized.current) {
    isStoreInitialized.current = true;
    localeStore = createLocaleStore(persistKey);
  }
  useEffect(() => {
    currentTranslations = merge(coreTranslations, translations);
  }, [translations]);
};

export const useTranslations = (props: Settings) => {
  useSettings(props);
  const storedLocale = localeStore.useStore((state) => state.locale);
  if (storedLocale) {
    currentLocale = storedLocale;
  }
};

export const setLocale = <LC extends LocaleCode = LocaleCode>(locale: LC) => {
  currentLocale = locale;
  localeStore.setLocale(locale);
};

export const useLocale = <LC extends LocaleCode = LocaleCode>() => {
  const locale = localeStore.useStore((state) => state.locale);
  return locale as LC;
};

export const useTranslate = <T extends TranslationMap>(translations?: T) => {
  const lang = useLocale<Extract<keyof T, LocaleCode>>();
  const mergedTranslations = merge(coreTranslations, translations);
  const scopedTranslate = (
    key: keyof T["is"] | CoreTranslationKey,
    variables?: any
  ) =>
    translate({
      key,
      variables,
      translations: mergedTranslations,
      locale: lang,
    });
  return { lang, t: scopedTranslate };
};

type TranslationVariables = {
  [key in string]: string;
};

type TranslateProps<TranslationKey> = {
  key: CoreTranslationKey | TranslationKey;
  variables: TranslationVariables;
  translations: TranslationMap;
  locale?: LocaleCode;
};

const translate = <TranslationKey>({
  key,
  variables = {},
  translations,
  locale = currentLocale,
}: TranslateProps<TranslationKey>) => {
  let text = translations[locale]?.[key as keyof Translations];
  if (!text) {
    console.error(
      `Missing translation for string: ${key}, in language: ${locale}`
    );
    if (locale === "is") {
      return "";
    }

    text = translations.is[key as keyof Translations];
    if (!text) {
      console.error(`Missing translation for string: ${key}, in language: is`);
      return "";
    }
  }

  if (!Object.keys(variables).length) {
    return text;
  }

  const variableKeys = Object.keys(variables);

  for (let i = 0, n = variableKeys.length; i < n; i++) {
    const variableKey = variableKeys[i];
    text = text.replaceAll(
      `{${variableKey}}`,
      variables[variableKey] as string
    );
  }

  return text;
};

export const t = <TranslationKey>(
  key: TranslateProps<TranslationKey>["key"],
  variables: TranslateProps<TranslationKey>["variables"]
): string =>
  translate<TranslationKey>({
    key,
    variables,
    translations: currentTranslations,
  });
