import { Controller, Get } from '@nestjs/common';
import { Setting } from './schema/setting.schema';
import { SettingService } from './setting.service';

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Get()
  async getLatestSetting(): Promise<Setting> {
    return this.settingService.getLatestSetting();
  }
}
