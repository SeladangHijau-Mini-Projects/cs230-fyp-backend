import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Setting, SettingSchema } from './schema/setting.schema';
import { SettingController } from './setting.controller';
import { SettingService } from './setting.service';

const schemas = MongooseModule.forFeature([
  {
      name: Setting.name,
      schema: SettingSchema,
  },
]);

@Module({
  imports: [schemas],
  controllers: [SettingController],
  providers: [SettingService],
})
export class SettingModule {}
