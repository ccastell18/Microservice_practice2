import {Request, Response, NextFunction} from 'express';

import { CustomError } from '../errors/custom-errors'

// import {RequestValidationError} from '../errors/request-validation-error';
// import {DatabaseConnectionError} from '../errors/database-connection-error'

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) =>{
  // if (err instanceof RequestValidationError){
  //   // const formattedErrors = err.errors.map( error =>{
  //   //   return {message: error.msg, field: error.param}
  //   // })

  //   // return res.status(400).send({errors: formattedErrors})
  //   return res.status(err.statusCode).send({errors: err.serializeErrors()})
  // }

  // if(err instanceof DatabaseConnectionError){
  //   // return res.status(500).send({errors: [ {message: err.reason}]})
  //   return res.status(err.statusCode).send({errors: [ {message: err.serializeErrors() }]})
  // }

  if(err instanceof CustomError){
    return res.status(err.statusCode).send({errors: err.serializeErrors()})
  }

  res.status(400).send({
    errors: [{ message: 'something went wrong' }]
  })
}