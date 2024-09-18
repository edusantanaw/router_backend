export type IPaginationResponse<T> = {
  total: number;
  data: T[];
};

export type IPagination = {
  take: number;
  skip: number;
};
