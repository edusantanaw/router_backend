import { routerGatewayFactory } from '../../gateway/router';
import { CreateRouterUsecase } from './../../../../data/usecases/routers/create';

export function createRouterUsecaseFactory(){
    const repository =  routerGatewayFactory()
    return new CreateRouterUsecase(repository)
}