import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Party extends Document {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    title: string;

    @Prop()
    color: string;
}

export const PartySchema = SchemaFactory.createForClass(Party);
