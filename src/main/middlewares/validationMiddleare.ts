import { NextFunction, Request, Response } from "express";
import { ContextRunner } from "express-validator";

export default (validations: ContextRunner[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (const validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        const errors = result.array() as {
          type: string;
          msg: string;
          path: string;
        }[];
        return res.status(400).json(`${errors[0].path}: ${errors[0].msg}`);
      }
    }
    next();
  };
};
