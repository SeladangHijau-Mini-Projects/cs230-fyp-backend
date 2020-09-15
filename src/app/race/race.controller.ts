import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { GeneralException } from 'src/common/exception/general.exception';
import { ResponseInterceptor } from 'src/common/interceptor/response.interceptor';
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
