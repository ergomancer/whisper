export class ExtendedError extends Error {
  statusCode: number

  constructor(status: number, name: string, message: string) {
    super(message)
    this.statusCode = status
    this.name = name
  }
}
