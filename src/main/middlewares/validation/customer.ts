import { body } from "express-validator";
import { validateCpfCnpj } from "./cpfCnpj";

export default [
  body("name").isLength({ min: 3 }).isString(),
  body("personType").isNumeric(),
  body("cpfCnpj").custom(validateCpfCnpj).isString(),
  body("dateOfBirth").isDate(),
  body("address").isObject(),
];
