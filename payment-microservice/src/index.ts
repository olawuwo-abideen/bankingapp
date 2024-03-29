import express, { Express } from 'express';
import { PORT } from './config';
import { databaseConnection } from './database';
import expressApp from './express-app';
import { CreateChannel } from './utils';
import errorHandler from './utils/errors';

const StartServer = async (): Promise<void> => {
  const app: Express = express();

  await databaseConnection();

  const channel = await CreateChannel();

  await expressApp(app, channel);

  errorHandler(app);

  const server = app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });

  server.on("error", (err) => {
    console.log(err);
    process.exit(1);
  });

  server.on("close", () => {
    channel.close();
  });
};

StartServer();
import express, { Express } from 'express';
import { PORT } from './config';
import { databaseConnection } from './database';
import expressApp from './express-app';
import { CreateChannel } from './utils';
import errorHandler from './utils/errors';

const StartServer = async (): Promise<void> => {
  const app: Express = express();

  await databaseConnection();

  const channel = await CreateChannel();

  await expressApp(app, channel);

  errorHandler(app);

  const server = app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });

  server.on("error", (err) => {
    console.log(err);
    process.exit(1);
  });

  server.on("close", () => {
    channel.close();
  });
};

StartServer();
