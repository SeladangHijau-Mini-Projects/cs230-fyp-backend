import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingModule } from './setting/setting.module';

@Module({
  imports: [ConfigModule.forRoot(), SettingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
