import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller('api') 相当于请求地址是给加了一个基准前缀api
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('page')
  getNewPage(): string {
    return 'hello new page';
  }
}
