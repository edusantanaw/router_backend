import { ICustomer } from "../../@types/customer.type";
import { IPagination, IPaginationResponse } from "../../@types/pagination.type";
import client from "../../main/config/elasticsearch";

export class CustomerRepositoryElasticSearch {
  private index = "customers_index";

  public async create(data: ICustomer) {
    await client.create({
      index: this.index,
      id: data.id,
      document: data,
    });
  }

  public async update(data: ICustomer) {
    await client.update({
      index: this.index,
      id: data.id,
      body: {
        doc: data,
      },
    });
  }

  public async loadWithPagination(
    data: IPagination
  ): Promise<IPaginationResponse<ICustomer>> {
    const items = await client.search<ICustomer>({
      index: this.index,
      body: {
        from: data.skip,
        size: data.take,
      },
    });

    console.log(items);
    
    return {
      data: items.hits.hits as unknown as ICustomer[],
      total: Number(items.hits.total),
    };
  }
}
