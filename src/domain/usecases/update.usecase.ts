export interface IUpdateUsecase<In> {
  update(data: In): Promise<In>;
}
