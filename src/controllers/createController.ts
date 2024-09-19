import { IController } from "../@types/controller.type";
import { HttpStatus } from "../@types/http";
import { ICreateUsecase } from "../domain/usecases/create.usecase";
import { Created } from "./utils/httpStatus";

export class CreateController<In, Out> implements IController<In> {
  constructor(protected createUsecase: ICreateUsecase<In, Out>) {}
  async handler(data: In): Promise<HttpStatus> {
    const created = await this.createUsecase.create(data);
    return Created(created);
  }
}
