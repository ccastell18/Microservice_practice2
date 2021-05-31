import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req, res)  =>{
  console.log('Hello World')
})

export {router as signupRouter}