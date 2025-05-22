import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { StringToLowerCasePipe } from './common/pipes/string-to-lowercase.pipe';
import { AuthGuard } from './common/guards/auth.guard';
import { UserAgent } from './common/decorators/user-agent.decorator';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UsePipes(StringToLowerCasePipe)
  @Post()
  create(@Body('title') title: string) {
    return `Movie: ${title}`;
  }

  @UseGuards(AuthGuard)
  @Get('user-profile')
  getProfile(@UserAgent() userAgent: string) {
    return {
      id: 1,
      email: 'vitaly.sadiko1@yandex.ru',
      username: 'vitaly56',
      userAgent,
    };
  }
}
