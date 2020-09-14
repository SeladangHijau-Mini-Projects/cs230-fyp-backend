import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Setting extends Document {
    @Prop()
    map: Record<string, Record<string, any>>;

    @Prop()
    races: Record<string, Record<string, any>>;

    @Prop()
    parties: Record<string, Record<string, any>>;

    @Prop()
    states: Record<string, Record<string, any>>;
}

export const SettingSchema = SchemaFactory.createForClass(Setting);
