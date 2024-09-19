export interface ILoadByIdUsecase<Out> {
  load(id: string): Promise<Out>;
}
