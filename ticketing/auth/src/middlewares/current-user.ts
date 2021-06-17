import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string,
  email: string
}
//says inside express project
declare global{
  namespace Express {
    //find Request interface
    interface Request{
      //add currentUser property to interface. The ? means it may or may not be defined. 
      currentUser?: UserPayload
    }
  }
}

export const currentUser = (
  req: Request, 
  res: Response, 
  next: NextFunction
  ) =>{
    if(!req.session?.jwt){
      return next();
    }

    try{
      const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;

      req.currentUser = payload
    }catch(err){}
    
    next()
}