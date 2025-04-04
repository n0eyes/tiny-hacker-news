type WithParams<K extends string = "slug", T = object> = T & {
  params: Promise<{ [key in K]: string }>;
};

type WithSearchParams<K extends string = "slug", T = object> = T & {
  searchParams: Promise<{ [key in K]?: string }>;
};

type WithCatchAllParams<K extends string = "slug", T = object> = T & {
  params: Promise<{ [key in K]?: string[] }>;
};

type WithError<T = object> = T & {
  error: Error;
  reset: VoidFunction;
};

export type { WithParams, WithSearchParams, WithCatchAllParams, WithError };
