import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Party } from './schema/part.schema';

@Injectable()
export class PartyService {
    constructor(@InjectModel(Party.name) private partyModel: Model<Party>) {}

    async getAllParties(): Promise<Party[]> {
        return this.partyModel.find({});
    }

    async getPartyById(id: string): Promise<Party> {
        return this.partyModel.findOne({ 'id': id });
    }
}
