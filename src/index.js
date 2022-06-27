import express from 'express';
import { tips } from './controller/tips-controller.js';
import { create } from './controller/create-controller.js';
import { bd } from './infra/bd.js';

const app = express();
app.use(express.json());

tips(app, bd);
create(app, bd);
  app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
  })