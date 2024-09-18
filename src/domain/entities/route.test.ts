import { IRouter } from "../../@types/route.type";
import { Brand } from "../enums/brand.enum";
import { Router } from "./router";

function makeAValidBrand(): IRouter {
  return {
    active: true,
    brand: Brand.Huawei,
    customers: [],
    IP: "192.168.0.1",
    IPv6: "60b7:f071:2e90:fe61:bfff:cb36:6953:d505",
    model: "any",
  };
}

describe("Router", () => {
  test("Should disable the router", () => {
    const data = makeAValidBrand();
    const router = new Router(data).disable().getRouter;
    expect(router.active).toBe(false);
  });

  test("Should return a new router", () => {
    const data = makeAValidBrand();
    const router = new Router(data).getRouter;
    expect(router).toEqual(data);
  });
});
