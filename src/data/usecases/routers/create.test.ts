import { IRouter } from "../../../@types/route.type";
import { Brand } from "../../../domain/enums/brand.enum";
import { AlreadyExistsException } from "../../../domain/exceptions/alreadyExists.exception";
import { RouterRepositoryInMemory } from "./../../../../test/mocks/routerRepository";
import { CreateRouterUsecase } from "./create";
import messages from "./messages/messages.json";

describe("CreateRouterUsecase", () => {
  test("Should throw if IP already in use", () => {
    const repository = new RouterRepositoryInMemory();
    const createRouterUsecase = new CreateRouterUsecase(repository);
    const data: IRouter = {
      active: true,
      brand: Brand.Cisco,
      customers: [],
      IP: "222222222222",
      IPv6: "11111111111",
      model: "1111111",
    };
    repository.items.push(data);
    const response = createRouterUsecase.create(data);
    expect(response).rejects.toThrow(
      new AlreadyExistsException(messages.routerAlreadyRegistered)
    );
  });

  test("Should create router successfuly", async () => {
    const repository = new RouterRepositoryInMemory();
    const createRouterUsecase = new CreateRouterUsecase(repository);
    const data: IRouter = {
      active: true,
      brand: Brand.Cisco,
      customers: [],
      IP: "222222222222",
      IPv6: "11111111111",
      model: "1111111",
    };
    const response = await createRouterUsecase.create(data);
    expect(response).toEqual(data);
  });
});
