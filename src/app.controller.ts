import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IWomen } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/women")
  getWomen(): IWomen [] { 
    return this.appService.getWomen();
  }
}
