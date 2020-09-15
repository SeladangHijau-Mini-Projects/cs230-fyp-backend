import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Race } from './schema/race.schema';

@Injectable()
export class RaceService {
    constructor(@InjectModel(Race.name) private raceModel: Model<Race>) {}

    async getAllRaces(): Promise<Race[]> {
        return this.raceModel.find({});
    }

    async getRaceById(id: string): Promise<Race> {
        return this.raceModel.findOne({ id: id });
    }
}
