import { IRouter } from "../../../@types/route.type";
import { Router } from "../../../domain/entities/router";
import { AlreadyDisabledException } from "../../../domain/exceptions/alreadyDisabled.exception";
import { NotFoundException } from "../../../domain/exceptions/notFoundException";
import { IDisableUsecase } from "../../../domain/usecases/disable.usecase";
import { ILoadByIpRepository } from "../../repositories/loadByIp.repository";
import { IUpdateRepository } from "../../repositories/update.repository";
import messages from "./messages/messages.json";

interface IRouterRepository
  extends IUpdateRepository<IRouter>,
    ILoadByIpRepository {}

export class DisableRouterUsecase implements IDisableUsecase<IRouter> {
  constructor(protected repository: IRouterRepository) {}
  async disable(ip: string): Promise<IRouter> {
    const routerExists = await this.repository.loadByIp(ip);
    if (!routerExists) throw new NotFoundException(messages.routerNotFound);
    if (routerExists.active === false)
      throw new AlreadyDisabledException(messages.routerAlreadyDisabled);
    const router = new Router(routerExists).disable().getRouter;
    const updated = await this.repository.update(router);
    return updated;
  }
}
