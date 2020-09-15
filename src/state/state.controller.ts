import { Controller, Get, Param } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  async getAllStates() {
    return this.stateService.getAllStates();
  }

  @Get(':id')
  async getStateById(@Param('id') id: string) {
    return this.stateService.getStateById(id);
  }
}
