import { Controller, Get, Param } from '@nestjs/common';
import { RaceService } from './race.service';

@Controller('race')
export class RaceController {
    constructor(private readonly raceService: RaceService) {}

    @Get()
    async getAllRaces() {
        return this.raceService.getAllRaces();
    }

    @Get(':id')
    async getRaceById(@Param('id') id: string) {
        return this.raceService.getRaceById(id);
    }
}
