type Idenitify = string | number;

export interface IDisableUsecase<Out> {
  disable(data: Idenitify): Promise<Out>;
}
