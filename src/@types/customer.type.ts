import { PersonType } from "../domain/enums/personType.enum";

export type IAddress = {
  state: string
  city: string
  cep: string
  number: string
  street: string
  province: string
}

export type ICreateCustomerData = {
  id?: string;
  name: string;
  personType: PersonType;
  cpfCnpj: string;
  dateOfBirth: Date;
  address: IAddress;
  createdAt?: Date;
  active: boolean;
};

export type ICustomer = Required<ICreateCustomerData>;
