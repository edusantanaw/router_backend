import { body } from "express-validator";
import { validateIPv4, validateIPv6 } from "./ip";

export default [
  body("IP").custom(validateIPv4),
  body("IPv6").custom(validateIPv6),
  body("brand").isNumeric(),
  body("model").isString(),
];
