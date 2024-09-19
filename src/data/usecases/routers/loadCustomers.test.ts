import { RouterRepositoryInMemory } from "../../../../test/mocks/routerRepository";
import { makeValidRouter } from "../../../../test/utils/createRouter";
import { NotFoundException } from "../../../domain/exceptions/notFoundException";
import { LoadRouterCustomersUsecase } from "./loadCustomers";
import messages from "./messages/messages.json";

describe("LoadRouterCustomersUsecase", () => {
  test("Should throw if router is not found", () => {
    const repository = new RouterRepositoryInMemory();
    const loadRouterCustomersUsecase = new LoadRouterCustomersUsecase(
      repository
    );
    const response = loadRouterCustomersUsecase.load("111111111");
    expect(response).rejects.toEqual(
      new NotFoundException(messages.routerNotFound)
    );
  });
  test("Should return customer of router", async () => {
    const repository = new RouterRepositoryInMemory();
    const router = makeValidRouter();
    repository.items.push(router);
    const loadRouterCustomersUsecase = new LoadRouterCustomersUsecase(
      repository
    );
    const response = await loadRouterCustomersUsecase.load(router.IP);
    expect(response).toEqual(repository.customers);
  });
});
