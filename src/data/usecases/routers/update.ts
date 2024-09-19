import { IRouter } from "../../../@types/route.type";
import { Router } from "../../../domain/entities/router";
import { NotFoundException } from "../../../domain/exceptions/notFoundException";
import { ILoadByIpRepository } from "../../repositories/loadByIp.repository";
import { IUpdateRepository } from "../../repositories/update.repository";
import messages from "./messages/messages.json";

interface IRouterRepository extends IUpdateRepository<IRouter>, ILoadByIpRepository {
}

export class UpdateRouterUsecase implements IUpdateRepository<IRouter> {
  constructor(protected repository: IRouterRepository) {}
  public async update(data: IRouter) {
    const routerAlreadyRegistered = await this.repository.loadByIp(data.IP);
    if (!routerAlreadyRegistered)
      throw new NotFoundException(messages.routerNotFound);
    const router = new Router(data).getRouter;
    const updated = await this.repository.update({ ...router, active: true });
    return updated;
  }
}
