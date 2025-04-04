type Fn<T extends Array<unknown>> = {
  (...arg: T): void;
};

type ComposeFunctions = {
  <T extends Array<unknown>>(...fns: (Fn<T> | undefined)[]): Fn<T>;
};

const composeFunctions: ComposeFunctions =
  (...fns) =>
  (...arg) => {
    fns.forEach((fn) => fn?.(...arg));
  };

export { composeFunctions };
