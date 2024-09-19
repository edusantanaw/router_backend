import { CreateRouterUsecase } from './../../../../data/usecases/routers/create';
import { RouterRepository } from "../../../../infra/repositories/router.repository";

export function createRouterUsecaseFactory(){
    const repository = new RouterRepository()
    return new CreateRouterUsecase(repository)
}