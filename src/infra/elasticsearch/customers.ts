import { SearchTotalHits } from "@elastic/elasticsearch/lib/api/types";
import { ICustomer } from "../../@types/customer.type";
import { IPagination, IPaginationResponse } from "../../@types/pagination.type";
import client from "../../main/config/elasticsearch";

export class CustomerRepositoryElasticSearch {
  private index = "customers_index";

  public async create(data: ICustomer) {
    try {
      await client.create({
        index: this.index,
        id: data.id,
        document: data,
      });
    } catch (error) {
      // ignorar caso tenha algum erro de conexão
    }
  }

  public async update(data: ICustomer) {
    try {
      await client.update({
        index: this.index,
        id: data.id,
        body: {
          doc: data,
        },
      });
    } catch (error) {
      // ignorar caso tenha algum erro de conexão
    }
  }

  public async loadWithPagination(
    data: IPagination
  ): Promise<IPaginationResponse<ICustomer>> {
    const result = await client.search<ICustomer>({
      index: this.index,
      body: {
        from: data.skip,
        size: data.take,
      },
    });

    const { value } = result.hits.total as SearchTotalHits;
    const items = result.hits.hits.map((e) => {
      return e._source!;
    });

    return {
      data: items,
      total: Number(value),
    };
  }
}
