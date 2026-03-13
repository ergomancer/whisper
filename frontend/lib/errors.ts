export class ExtendedError extends Error {
  statusCode: number

  constructor(status: number, name: string, message: string) {
    super(message)
    this.statusCode = status
    this.name = name
  }
}

export const NotFound = new ExtendedError(
  404,
  "NotFound",
  "The requested note does not exist!"
)

export const NotUnlocked = new ExtendedError(
  401,
  "NotUnlocked",
  "The provided password failed to unlock the note!"
)

export const AIError = new ExtendedError(
  500,
  "InternalServerError",
  "Could not process request!"
)
