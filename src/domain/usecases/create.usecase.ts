export interface ICreateUsecase<In, Out> {
  create(data: In): Promise<Out>;
}
