import { Customer } from "@prisma/client";
import { IAddress, ICustomer } from "../../@types/customer.type";
import { IPagination, IPaginationResponse } from "../../@types/pagination.type";
import PrismaClient from "../prisma";

export class CustomerRepository {
  public async create(data: ICustomer) {
    const customer = await PrismaClient.customer.create({
      data,
    });
    return { ...customer, address: customer.address as IAddress } as ICustomer;
  }

  public async update(data: ICustomer) {
    const customer = await PrismaClient.customer.update({
      data,
      where: {
        id: data.id,
      },
    });
    return { ...customer, address: customer.address as IAddress } as ICustomer;
  }

  public async loadById(id: string) {
    const customer = await PrismaClient.customer.findFirst({
      where: {
        id,
      },
    });
    if (!customer) return null;
    return { ...customer, address: customer.address as IAddress } as ICustomer;
  }

  public async loadByCpfCnpj(cpfCnpj: string) {
    const customer = await PrismaClient.customer.findFirst({
      where: {
        cpfCnpj,
      },
    });
    if (!customer) return null;
    return { ...customer, address: customer.address as IAddress } as ICustomer;
  }

  public async loadWithPagination(
    data: IPagination
  ): Promise<IPaginationResponse<Customer>> {
    const customers = await PrismaClient.customer.findMany({
      take: data.take,
      skip: data.skip,
    });
    const count = await PrismaClient.customer.count();
    return { total: count, data: customers };
  }
}
