import { randomUUID } from "node:crypto";
import { RouterRepositoryInMemory } from "../../../../test/mocks/routerRepository";
import { Brand } from "../../../domain/enums/brand.enum";
import { AlreadyDisabledException } from "../../../domain/exceptions/alreadyDisabled.exception";
import { NotFoundException } from "../../../domain/exceptions/notFoundException";
import { DisableRouterUsecase } from "./disable";
import messages from "./messages/messages.json";

function makeValidRouter() {
  return {
    active: true,
    brand: Brand.Cisco,
    customers: [],
    IP: "222222222222",
    IPv6: "11111111111",
    model: "1111111",
  };
}

describe("DisableRouterUsecase", () => {
  test("Should throw if router not exists", () => {
    const repository = new RouterRepositoryInMemory();
    const disableRouterUsecase = new DisableRouterUsecase(repository);
    const response = disableRouterUsecase.disable(randomUUID());
    expect(response).rejects.toEqual(
      new NotFoundException(messages.routerNotFound)
    );
  });

  test("Should throw if router already disabled ", async () => {
    const repository = new RouterRepositoryInMemory();
    const router = makeValidRouter();
    router.active = false;
    repository.items.push(router);
    const disableRouterUsecase = new DisableRouterUsecase(repository);
    const response = disableRouterUsecase.disable(router.IP);
    expect(response).rejects.toEqual(
      new AlreadyDisabledException(messages.routerAlreadyDisabled)
    );
  });

  test("Should disable router successfully", async () => {
    const repository = new RouterRepositoryInMemory();
    const router = makeValidRouter();
    repository.items.push(router);
    const disableRouterUsecase = new DisableRouterUsecase(repository);
    const response = await disableRouterUsecase.disable(router.IP);
    expect(response.active).toBe(false);
  });
});
