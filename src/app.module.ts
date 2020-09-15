import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { StateModule } from './state/state.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, StateModule],
})
export class AppModule {}
