import { Brand } from "../domain/enums/brand.enum";

export type IRouter = {
  IP: string;
  IPv6: string;
  brand: Brand;
  model: string;
  active: boolean;
  customers: string[];
};
