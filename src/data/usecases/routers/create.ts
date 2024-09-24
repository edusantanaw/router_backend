import { IRouter } from "../../../@types/route.type";
import { Router } from "../../../domain/entities/router";
import { AlreadyExistsException } from "../../../domain/exceptions/AlreadyExists.exception";
import { ICreateUsecase } from "../../../domain/usecases/create.usecase";
import { ICreateRepository } from "../../repositories/create.repository";
import messages from "./messages/messages.json";

interface IRouterRepository extends ICreateRepository<IRouter> {
  loadByIp(ip: string): Promise<IRouter | null>;
}

export class CreateRouterUsecase implements ICreateUsecase<IRouter, IRouter> {
  constructor(protected repository: IRouterRepository) {}
  public async create(data: IRouter) {
    const routerAlreadyRegistered = await this.repository.loadByIp(data.IP);
    if (routerAlreadyRegistered)
      throw new AlreadyExistsException(messages.routerAlreadyRegistered);
    const router = new Router(data).getRouter;
    const created = await this.repository.create(router);
    return created;
  }
}
