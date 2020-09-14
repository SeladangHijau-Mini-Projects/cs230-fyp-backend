import { Controller, Get } from '@nestjs/common';
import { Setting } from './schema/setting.schema';
import { SettingService } from './setting.service';

@Controller('settings')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Get('/latest')
  async getLatestSetting(): Promise<Setting> {
    return this.settingService.getLatestSetting();
  }
}
