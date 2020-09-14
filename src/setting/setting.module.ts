import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SettingController } from './setting.controller';
import { SettingService } from './setting.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [SettingController],
  providers: [SettingService],
})
export class SettingModule {}
