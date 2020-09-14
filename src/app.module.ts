import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { SettingModule } from './setting/setting.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, SettingModule],
})
export class AppModule {}
