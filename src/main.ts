import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ServiceAccount } from 'firebase-admin';
import * as admin from 'firebase-admin';
import * as helmet from 'helmet';
import * as csurf from 'csurf';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const serviceAccount: ServiceAccount = require("../keys/firebase-private-key.json");

  const configService: ConfigService = app.get(ConfigService);
  // Set the config options
  // const adminConfig: ServiceAccount = {
  //   "projectId": configService.get<string>('FIREBASE_PROJECT_ID'),
  //   "privateKey": configService.get<string>('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n'),
  //   "clientEmail": configService.get<string>('FIREBASE_CLIENT_EMAIL'),
  // };

  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://form-builder-1e601-default-rtdb.firebaseio.com/",
  });

  app.use(csurf());
  app.enableCors();
  app.use(helmet());

  await app.listen(configService.get<string>('API_PORT') || 3000);
}
bootstrap();
