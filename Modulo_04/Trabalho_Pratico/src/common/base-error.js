import {
  NotFoundException,
  NotAuthorized,
  CustomerDisabledException,
  ForbiddenCompanyDifferent,
  EnoughDataException,
  AlreadyExists,
  NoTokenProvided, NotAllowedException
} from './error-handling';

class BaseError extends Error {
  getCode() {
    if (this instanceof NotFoundException) {
      return 404;
    }

    if (this instanceof NotAuthorized) {
      return 401;
    }

    if (this instanceof AlreadyExists) {
      return 409;
    }

    if (this instanceof EnoughDataException) {
      return 409;
    }

    if (this instanceof ForbiddenCompanyDifferent) {
      return 403;
    }

    if (this instanceof CustomerDisabledException) {
      return 403;
    }

    if (this instanceof NoTokenProvided) {
      return 401;
    }
    if (this instanceof NotAllowedException) {
      return 405;
    }

    return 500;
  }
}

export { BaseError };
