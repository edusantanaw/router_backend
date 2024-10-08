import {
  IPagination,
  IPaginationResponse,
} from "../../../@types/pagination.type";
import {
  ILoadWithPaginationlUsecase,
  IPagationationData,
} from "../../../domain/usecases/loadWithPagination.usecase";

interface ILoadWithPaginationRepository<T> {
  loadWithPagination(data: IPagination): Promise<IPaginationResponse<T>>;
}

export class LoadWithPaginationlUsecase<T>
  implements ILoadWithPaginationlUsecase<T>
{
  constructor(protected repository: ILoadWithPaginationRepository<T>) {}

  public async load(data: IPagationationData) {
    const pagination = this.getPagination(data);
    const itens = await this.repository.loadWithPagination(pagination);
    return itens;
  }

  private getPagination(data: IPagationationData) {
    let take = Number(data.take);
    let skip = Number(data?.skip ?? 0);
    if (!data.take || Number(data.take) > 100) take = 100;
    return {
      take,
      skip,
    };
  }
}
