import { PersonType } from "../domain/enums/personType.enum";

export type ICreateCustomerData = {
  id?: string;
  name: string;
  personType: PersonType;
  cpfCnpj: string;
  dateOfBirth: Date;
  address: any;
  createdAt?: Date;
  active: boolean;
};

export type ICustomer = Required<ICreateCustomerData>;
