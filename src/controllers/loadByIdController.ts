import { IController } from "../@types/controller.type";
import { HttpStatus } from "../@types/http";
import { ILoadByIdUsecase } from "../domain/usecases/loadById.usecase";
import { Ok } from "./utils/httpStatus";

export class LoadByIdController<Out> implements IController<{ id: string }> {
  constructor(protected loadByIdUsecase: ILoadByIdUsecase<Out>) {}
  async handler(data: { id: string }): Promise<HttpStatus> {
    const response = await this.loadByIdUsecase.load(data.id);
    return Ok(response);
  }
}
