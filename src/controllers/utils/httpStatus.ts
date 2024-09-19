function HttpStatus<T>(statusCode: number, data: T) {
  return {
    statusCode,
    data,
  };
}

const Created = <T>(data: T) => HttpStatus(201, data);

const Ok = <T>(data: T) => HttpStatus(200, data);

export { Created, HttpStatus, Ok };
