import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { State } from './schema/state.schema';

@Injectable()
export class StateService {
    constructor(@InjectModel(State.name) private stateModel: Model<State>) {}

    async getAllStates(): Promise<State[]> {
        return this.stateModel.find({});
    }

    async getStateById(id: string): Promise<State> {
        return this.stateModel.findOne({ 'id': id });
    }
}
