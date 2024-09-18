import { randomUUID } from "node:crypto";
import { PersonType } from "../enums/personType.enum";
import { ICustomer } from "../../@types/customer.type";

type IData = {
  id?: string;
  name: string;
  personType: PersonType;
  cpfCnpj: string;
  dateOfBirth: Date;
  address: any;
  createdAt?: Date;
  active: boolean;
};

export class Customer {
  private id: string;
  private name: string;
  private personType: PersonType;
  private cpfCnpj: string;
  private dateOfBirth: Date;
  private address: any;
  private createdAt?: Date;
  private active: boolean = true;

  constructor(data: IData) {
    this.id = data.id ?? randomUUID();
    this.name = data.name;
    this.address = data.address;
    this.dateOfBirth = data.dateOfBirth;
    this.cpfCnpj = data.cpfCnpj;
    this.personType = data.personType;
    this.createdAt = data.createdAt;
    if (data.active !== undefined) this.active = data.active;
  }

  public get getCustomer(): ICustomer {
    return {
      id: this.id,
      name: this.name,
      personType: this.personType,
      cpfCnpj: this.cpfCnpj,
      dateOfBirth: this.dateOfBirth,
      address: this.address,
      createdAt: this.createdAt,
      active: this.active,
    };
  }

  public disable() {
    this.active = false;
    return this
  }
}
