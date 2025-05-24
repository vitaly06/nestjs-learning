import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LoggingMiddleware } from './common/middlewares/logger.middleware';
import { MovieModule } from './movie/movie.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, MovieModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware);
  }
}
