import { IPagination } from "../../src/@types/pagination.type";

export class RepositoryInMemory<T> {
  public items: T[] = [];

  public createInput: T | null = null;
  public async create(data: T) {
    this.createInput = data;
    return data;
  }

  public updateInput: T | null = null;
  public async update(data: T) {
    this.updateInput = data;
    this.items[0] = data;
    return data;
  }

  public loadWithPaginationInput: IPagination | null = null;
  public async loadWithPagination(data: IPagination) {
    this.loadWithPaginationInput = data;
    return {
      total: this.items.length,
      data: this.items,
    };
  }
}
