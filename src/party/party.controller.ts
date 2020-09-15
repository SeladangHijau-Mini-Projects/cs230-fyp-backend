import { Controller, Get, Param } from '@nestjs/common';
import { PartyService } from './party.service';

@Controller('party')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @Get()
  async getAllParties() {
    return this.partyService.getAllParties();
  }

  @Get(':id')
  async getPartyById(@Param('id') id: string) {
    return this.partyService.getPartyById(id);
  }
}
