import { Module, Scope } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { PartyModule } from './app/party/party.module';
import { StateModule } from './app/state/state.module';
import { RaceModule } from './app/race/race.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, StateModule, RaceModule, PartyModule],
})
export class AppModule {}
