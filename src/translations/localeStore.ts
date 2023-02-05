import create from "zustand";
import { persist } from "zustand/middleware";

export type LocaleCode = "en" | "is";

type LocaleStoreState = {
  locale: LocaleCode;
};

const defaultState: LocaleStoreState = {
  locale: "is",
};

const createPersistLocaleStore = (persistKey: string) =>
  create(persist(() => defaultState, { name: persistKey }));

const createSimpleLocaleStore = () => create(() => defaultState);

export const createLocaleStore = (persistKey?: string) => {
  const useStore = persistKey
    ? createPersistLocaleStore(persistKey)
    : createSimpleLocaleStore();
  const setLocale = (locale: LocaleCode) =>
    useStore.setState(() => ({ locale, current: locale }));

  return { useStore, setLocale };
};
