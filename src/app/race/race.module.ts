import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Race, RaceSchema } from './schema/race.schema';
import { RaceController } from './race.controller';
import { RaceService } from './race.service';

const schemas = MongooseModule.forFeature([
  {
      name: Race.name,
      schema: RaceSchema,
  },
]);

@Module({
  imports: [schemas],
  controllers: [RaceController],
  providers: [RaceService],
})
export class RaceModule {}
