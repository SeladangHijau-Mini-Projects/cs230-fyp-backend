import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { PartyModule } from './party/party.module';
import { RaceModule } from './race/race.module';
import { StateModule } from './state/state.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, StateModule, RaceModule, PartyModule],
})
export class AppModule {}
