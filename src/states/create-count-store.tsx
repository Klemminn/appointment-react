import create from "zustand";

type CountStore = {
  count: number;
};

const defaultState: CountStore = {
  count: 0,
};

export const createCountStore = () => {
  const useStore = create<CountStore>(() => defaultState);
  const increase = () => useStore.setState((s) => ({ count: s.count + 1 }));
  const reset = () => useStore.setState(defaultState);

  return { useStore, increase, reset };
};
