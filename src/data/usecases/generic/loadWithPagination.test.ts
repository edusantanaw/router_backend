import { RepositoryInMemory } from "../../../../test/mocks/repository";
import { ICustomer } from "../../../@types/customer.type";
import { LoadWithPaginationlUsecase } from "./loadWithPagination";

describe("LoadAllWithPagination", () => {
  test("Should limit the pagination with 100 itens", async () => {
    const repository = new RepositoryInMemory<ICustomer>();
    const loadWithPagination = new LoadWithPaginationlUsecase(repository);
    await loadWithPagination.load({ take: 101, skip: 0 });
    expect(repository.loadWithPaginationInput?.take).toBe(100);
  });

  test("Should set skip equals 0 if no value is provided", async () => {
    const repository = new RepositoryInMemory<ICustomer>();
    const loadWithPagination = new LoadWithPaginationlUsecase(repository);
    await loadWithPagination.load({ take: 100});
    expect(repository.loadWithPaginationInput?.skip).toBe(0);
  });
});
