import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res)  =>{
  console.log('Hello World')
})

export {router as currentUserRouter}