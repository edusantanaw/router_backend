import { HttpStatus } from "./http";

export interface IController<In> {
  handler(data: In): Promise<HttpStatus>;
}
