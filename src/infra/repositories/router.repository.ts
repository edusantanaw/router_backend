import { Routers } from "@prisma/client";
import { IPagination, IPaginationResponse } from "../../@types/pagination.type";
import { IRouter } from "../../@types/route.type";
import PrismaClient from "../prisma";

export class RouterRepository {
  public async create(data: IRouter) {
    const router = await PrismaClient.routers.create({
      data: {
        active: data.active,
        brand: data.brand,
        IP: data.IP,
        IPv6: data.IPv6,
        model: data.model,
        customers: {
          connect: data.customers.map((e) => ({
            id: e,
          })),
        },
      },
    });
    return router as IRouter;
  }

  public async update(data: IRouter) {
    const router = await PrismaClient.routers.update({
      where: {
        IP: data.IP,
      },
      data: {
        active: data.active,
        brand: data.brand,
        IP: data.IP,
        IPv6: data.IPv6,
        model: data.model,
        customers: {
          connect: data.customers.map((e) => ({
            id: e,
          })),
        },
      },
    });
    return router as IRouter;
  }

  public async loadByIp(ip: string) {
    const router = await PrismaClient.routers.findFirst({
      where: {
        IP: ip,
      },
    });
    return router as IRouter | null;
  }

  public async loadWithPagination(
    data: IPagination
  ): Promise<IPaginationResponse<Routers>> {
    const routers = await PrismaClient.routers.findMany({
      take: data.take,
      skip: data.skip,
    });
    const count = await PrismaClient.customer.count();
    return { total: count, data: routers };
  }
}
