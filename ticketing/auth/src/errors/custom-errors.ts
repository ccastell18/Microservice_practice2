export abstract class CustomError extends Error{
  abstract statusCode: number;

  constructor(message: string){
    //super is equal to calling new Error
    super(message)

    Object.setPrototypeOf(this,CustomError.prototype)
  }
  abstract serializeErrors(): {message: string; field?: string}[]
}