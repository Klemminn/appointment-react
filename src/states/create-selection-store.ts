import create from "zustand";
import produce from "immer";
import { persist } from "zustand/middleware";

type Id = string | number;

type IdBooleanMap = {
  [id in Id]: boolean;
};

const assertArray = (input: Id | Id[]) =>
  Array.isArray(input) ? input : [input];

const createPersistStore = (persistKey: string) =>
  create(persist<IdBooleanMap>(() => ({}), { name: persistKey }));

const createSimpleStore = () => create<IdBooleanMap>(() => ({}));

export const createSelectionStore = (persistKey?: string) => {
  const useStore = persistKey
    ? createPersistStore(persistKey)
    : createSimpleStore();
  const toggle = (id: Id) =>
    useStore.setState((state) => ({ [id]: !state[id] }));
  const add = (ids: Id | Id[]) =>
    useStore.setState(
      produce((state) => assertArray(ids).forEach((id) => (state[id] = true)))
    );
  const clear = () => useStore.setState({}, true);
  const isSelected = (state: IdBooleanMap, ids: Id | Id[]) =>
    assertArray(ids).findIndex((id) => !state[id]) === -1;

  return { useStore, toggle, add, clear, isSelected };
};

export type SelectionStore = ReturnType<typeof createSelectionStore>;
