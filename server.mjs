import express from "express";
import cors from "cors";

const app = express()

app.use(cors())

app.use('/login', (req, res) => {
console.log('this is req'+{...req})  
debugger;

  res.send({
    token: '123'
  });
});

  app.listen(3001, () => console.log('API is running on http://localhost:3001/Login'));