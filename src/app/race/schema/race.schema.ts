import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Race extends Document {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    color: string;
}

export const RaceSchema = SchemaFactory.createForClass(Race);
