import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Setting } from './schema/setting.schema';

@Injectable()
export class SettingService {
    constructor(@InjectModel(Setting.name) private settingModel: Model<Setting>) {}

    async getLatestSetting(): Promise<Setting> {
        return this.settingModel.findOne({}).sort({'_id': -1});
    }
}
