import { Brand } from "../../src/domain/enums/brand.enum";

export function makeValidRouter() {
    return {
      active: true,
      brand: Brand.Cisco,
      customers: [],
      IP: "222222222222",
      IPv6: "11111111111",
      model: "1111111",
    };
  }
  