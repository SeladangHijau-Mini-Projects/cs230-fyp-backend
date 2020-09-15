import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { State, StateSchema } from './schema/state.schema';
import { StateController } from './state.controller';
import { StateService } from './state.service';

const schemas = MongooseModule.forFeature([
    {
        name: State.name,
        schema: StateSchema,
    },
]);

@Module({
    imports: [schemas],
    controllers: [StateController],
    providers: [StateService],
})
export class StateModule {}
