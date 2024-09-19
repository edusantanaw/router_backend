import { IRouter } from "../../../@types/route.type";
import { Brand } from "../../../domain/enums/brand.enum";
import { NotFoundException } from "../../../domain/exceptions/notFoundException";
import { RouterRepositoryInMemory } from "./../../../../test/mocks/routerRepository";
import messages from "./messages/messages.json";
import { UpdateRouterUsecase } from "./update";

describe("UpdateRouterUsecase", () => {
  test("Should throw if router are not found", () => {
    const repository = new RouterRepositoryInMemory();
    const updateRouterUsecase = new UpdateRouterUsecase(repository);
    const data: IRouter = {
      active: true,
      brand: Brand.Cisco,
      customers: [],
      IP: "222222222222",
      IPv6: "11111111111",
      model: "1111111",
    };
    const response = updateRouterUsecase.update(data);
    expect(response).rejects.toThrow(
      new NotFoundException(messages.routerNotFound)
    );
  });

  test("Should update router successfuly and not allow to disable", async () => {
    const repository = new RouterRepositoryInMemory();
    const createRouterUsecase = new UpdateRouterUsecase(repository);
    const data: IRouter = {
      active: false,
      brand: Brand.Cisco,
      customers: [],
      IP: "222222222222",
      IPv6: "11111111111",
      model: "1111111",
    };
    repository.items.push(data);
    const response = await createRouterUsecase.update(data);
    expect(response).toEqual({ ...data, active: true });
  });
});
