import { randomUUID } from "node:crypto";
import { ICreateCustomerData, ICustomer } from "@/@types/customer.type";
import { PersonType } from "../enums/personType.enum";
import { InvalidEntityException } from "../exceptions/invalidEntityException";
import messages from "./messages/messages.json";

export class Customer {
  private id: string;
  private name: string;
  private personType: PersonType;
  private cpfCnpj: string;
  private dateOfBirth: Date;
  private address: any;
  private createdAt?: Date;
  private active: boolean = true;

  constructor(data: ICreateCustomerData) {
    this.id = data.id ?? randomUUID();
    this.name = data.name;
    this.address = data.address;
    this.dateOfBirth = data.dateOfBirth;
    this.cpfCnpj = data.cpfCnpj;
    if (!PersonType[data.personType])
      throw new InvalidEntityException(messages.invalidCustomerType);
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
      createdAt: this.createdAt!,
      active: this.active,
    };
  }

  public disable() {
    this.active = false;
    return this;
  }
}
