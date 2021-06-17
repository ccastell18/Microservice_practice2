import express from 'express';
import jwt from 'jsonwebtoken';
import { isTypeQueryNode } from 'typescript';


const router = express.Router();

router.get('/api/users/currentuser', (req, res)  =>{
  //question mark checks to see if an internal property exists or not.
  if(!req.session?.jwt){
    return res.send({current: null})
  }  
  try{
  //verify will throw an error
  const payload = jwt.verify(
    req.session.jwt, 
    process.env.JWT_KEY!
    );
    res.send({currentUser: payload})
  }catch(err){
    res.send({currentUser: null})
  }
})

export {router as currentUserRouter}