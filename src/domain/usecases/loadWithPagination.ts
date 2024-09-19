import { IPaginationResponse } from "../../@types/pagination.type";

export type IPagationationData = {
  take?: string | number;
  skip?: string | number;
};

export interface ILoadWithPaginationlUsecase<T> {
  load(data: IPagationationData): Promise<IPaginationResponse<T>>;
}
