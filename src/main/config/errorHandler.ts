import { AlreadyExistsException } from "./../../domain/exceptions/alreadyExists.exception";
import { HttpStatus } from "../../@types/http";
import { AlreadyDisabledException } from "../../domain/exceptions/alreadyDisabled.exception";
import { InvalidEntityException } from "../../domain/exceptions/invalidEntityException";
import { NotFoundException } from "../../domain/exceptions/notFoundException";

export default (error: Error): HttpStatus => {
  if (error instanceof NotFoundException)
    return {
      statusCode: 404,
      data: error.message,
    };
  if (
    error instanceof InvalidEntityException ||
    error instanceof AlreadyDisabledException ||
    error instanceof AlreadyExistsException
  )
    return {
      statusCode: 400,
      data: error.message,
    };
  return {
    statusCode: 500,
    data: "Internal Server Error",
  };
};
