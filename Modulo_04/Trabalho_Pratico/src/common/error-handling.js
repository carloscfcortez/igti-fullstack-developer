import { BaseError } from "./base-error";

class NotFoundException extends BaseError {
  constructor(attribute) {
    super();
    this.name = "NotFoundException";
    this.message = `${attribute} not found`;
    this.status = 404;
  }
}

class AlreadyExists extends BaseError {
  constructor(attribute) {
    super();
    this.name = "AlreadyExists";
    this.message = `${attribute} already exists`;
    this.status = 409;
  }
}

class EnoughDataException extends BaseError {
  constructor(message) {
    super();
    this.name = "EnoughDataException";
    this.message = message;
    this.status = 409;
  }
}
class NotAllowedException extends BaseError {
  constructor(message) {
    super();
    this.name = "NotAllowedException";
    this.message = message;
    this.status = 405;
  }
}
class FieldRequiredException extends BaseError {
  constructor(attribute) {
    super();
    this.name = "NotAllowedException";
    this.message = `${attribute} is required`;
    this.status = 405;
  }
}

export {
  NotFoundException,
  AlreadyExists,
  EnoughDataException,
  NotAllowedException,
  FieldRequiredException,
};
