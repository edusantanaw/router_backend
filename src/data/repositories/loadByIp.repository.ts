import { IRouter } from "../../@types/route.type";

export interface ILoadByIpRepository {
  loadByIp(ip: string): Promise<IRouter | null>;
}
