import { SearchTotalHits } from "@elastic/elasticsearch/lib/api/types";
import { IPagination, IPaginationResponse } from "../../@types/pagination.type";
import client from "../../main/config/elasticsearch";
import { IRouter } from "../../@types/route.type";

export class RouterRepositoryElasticSearch {
  private index = "routers_index";

  public async create(data: IRouter) {
    await client.create({
      index: this.index,
      id: data.IP,
      document: data,
    });
  }

  public async update(data: IRouter) {
    await client.update({
      index: this.index,
      id: data.IP,
      body: {
        doc: data,
      },
    });
  }

  public async loadWithPagination(
    data: IPagination
  ): Promise<IPaginationResponse<IRouter>> {
    const result = await client.search<IRouter>({
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
