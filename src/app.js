import express from "express";
import { ModelManager } from './lib/model-manager';
import indexRouter from './routes'
import schema from './middleware/schema';

const app = express();

// app.use(schema);

app.use('/', indexRouter);

app.listen(3000, () => {
  ModelManager.init();
  console.log('server is up and running');
})