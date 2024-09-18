export class AlreadyDisabledException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AlreadyDisabledException";
  }
}
