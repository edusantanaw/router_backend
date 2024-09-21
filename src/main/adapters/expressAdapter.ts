import { IController } from "../../@types/controller.type";
import { Request, Response } from "express";
import errorHandler from "../config/errorHandler";

export default <In>(controller: IController<In>) => {
  return async (req: Request, res: Response) => {
    try {
      const response = await controller.handler({
        ...req.params,
        ...req.query,
        ...req.body,
      });
      return res.status(response.statusCode).json(response.data);
    } catch (error) {
      console.log(error)
      const { data, statusCode } = errorHandler(error as Error);
      return res.status(statusCode).json(data);
    }
  };
};
