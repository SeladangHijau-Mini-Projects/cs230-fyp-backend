import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Party, PartySchema } from './schema/part.schema';
import { PartyController } from './party.controller';
import { PartyService } from './party.service';

const schemas = MongooseModule.forFeature([
  {
      name: Party.name,
      schema: PartySchema,
  },
]);

@Module({
  imports: [schemas],
  controllers: [PartyController],
  providers: [PartyService],
})
export class PartyModule {}
