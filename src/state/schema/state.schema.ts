import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class State extends Document {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    color: string;

    @Prop()
    demography: Record<string, Record<string, any>>;

    @Prop()
    parliaments: Record<string, Record<string, any>>;

    @Prop()
    results: Record<string, Record<string, any>>;
}

export const StateSchema = SchemaFactory.createForClass(State);
