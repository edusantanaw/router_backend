import { IController } from "../../@types/controller.type";
import { Request, Response } from "express";

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
      console.log(error);
      return res.status(500).send("Internal Server Error!");
    }
  };
};
