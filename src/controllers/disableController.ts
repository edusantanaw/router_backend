import { IController } from "../@types/controller.type";
import { HttpStatus } from "../@types/http";
import { IDisableUsecase } from "../domain/usecases/disable.usecase";
import { Ok } from "./utils/httpStatus";

type Idenitify = {
  id: string | number;
};

export class DisableController<Out> implements IController<Idenitify> {
  constructor(protected disableUsecase: IDisableUsecase<Out>) {}
  async handler(data: Idenitify): Promise<HttpStatus> {
    const { id } = data;
    const disabled = await this.disableUsecase.disable(id);
    return Ok(disabled);
  }
}
