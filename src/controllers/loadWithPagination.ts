import { IController } from "../@types/controller.type";
import { HttpStatus } from "../@types/http";
import {
  ILoadWithPaginationlUsecase,
  IPagationationData,
} from "../domain/usecases/loadWithPagination.usecase";
import { Ok } from "./utils/httpStatus";

export class LoadWithPaginationController<T>
  implements IController<IPagationationData>
{
  constructor(
    protected loadWithPaginationUsecase: ILoadWithPaginationlUsecase<T>
  ) {}
  async handler(data: IPagationationData): Promise<HttpStatus> {
    const response = await this.loadWithPaginationUsecase.load(data);
    return Ok(response);
  }
}
