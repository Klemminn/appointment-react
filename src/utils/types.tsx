export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = T | U extends Object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

export type MakePropertiesOptional<Type, Key> = Key extends keyof Type
  ? Omit<Type, Key> & Partial<Pick<Type, Key>>
  : never;

export type MakePropertiesRequired<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};
