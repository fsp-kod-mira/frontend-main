export type PaginatedResult<T> = {
  data: T[];
  current: number;
  total: number;
};
