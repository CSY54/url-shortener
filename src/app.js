import express, { json } from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import 'dotenv/config';

import urlRouter from './routers/urlRouter.js';
import apiRouter from './routers/apiRouter.js';

const app = express();

app.use(helmet());
app.use(logger(process.env.NODE_ENV === 'development' ? 'dev' : 'short'));
app.use(json());

app.use('/', urlRouter);
app.use('/api/v1', apiRouter);

app.use((req, res) => {
  res.status(404).json();
});

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  res.status(err.status || 500).json(err.message);
});

app.listen(process.env.PORT, process.env.HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on http://${process.env.HOST}:${process.env.PORT}`);
});

export default app;
