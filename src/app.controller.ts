import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get(':id')
  // getHello(@Param('id') id: string, @Query('role') role: string): string {
  //   return this.appService.getHello(id, role);
  // }
}
