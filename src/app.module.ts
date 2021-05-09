import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { AppController } from './app.controller';
import { LogLevel } from '@sentry/types';
import * as redisStore from 'cache-manager-redis-store';

import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FormSchemaService } from './form-schema.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SentryModule.forRootAsync({
      imports: [ ConfigModule ],
      useFactory: async (cfg: ConfigService) => ({
        dsn: cfg.get('SENTRY_DSN'),
        debug: false,
        environment: cfg.get('ENVIRONMENT'),
        release: cfg.get('RELEASE'),
        logLevel: LogLevel.Debug 
      }),
      inject: [ ConfigService ],
    }),
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    // SentryModule.forRoot({
    //   dsn: 'sentry_io_dsn',
    //   environment: 'dev',
    //   release: 'some_release',
    //   logLevel: LogLevel.Debug
    // }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 20,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    FormSchemaService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
    
  ],
})
export class AppModule {}
