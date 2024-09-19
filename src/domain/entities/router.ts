import { IRouter } from "../../@types/route.type";
import { Brand } from "../enums/brand.enum";

export class Router {
  private IP: string;
  private IPv6: string;
  private brand: Brand;
  private model: string;
  private active: boolean = true;
  private customers: string[] = [];

  constructor(data: IRouter) {
    this.IP = data.IP;
    this.IPv6 = data.IPv6;
    this.brand = data.brand;
    this.model = data.model;
    if (data.active !== undefined) this.active = data.active;
    this.customers = data.customers;
  }

  public get getRouter(): IRouter {
    return {
      IP: this.IP,
      IPv6: this.IPv6,
      brand: this.brand,
      active: this.active,
      customers: this.customers,
      model: this.model,
    };
  }

  public disable() {
    this.active = false;
    return this;
  }
}
