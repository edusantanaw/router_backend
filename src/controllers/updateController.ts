import { IController } from "../@types/controller.type";
import { HttpStatus } from "../@types/http";
import { IUpdateUsecase } from "../domain/usecases/update.usecase";
import { Ok } from "./utils/httpStatus";

export class UpdateController<In> implements IController<In> {
  constructor(protected updateUsecase: IUpdateUsecase<In>) {}
  async handler(data: In): Promise<HttpStatus> {
    const updated = await this.updateUsecase.update(data);
    return Ok(updated);
  }
}
