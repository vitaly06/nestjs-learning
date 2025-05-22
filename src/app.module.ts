import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewModule } from './review/review.module';
import { ActorModule } from './actor/actor.module';
import { PrismaModule } from './prisma/prisma.module';
import { MovieModule } from './movie/movie.module';
import { LoggingMiddleware } from './common/middlewares/logger.middleware';
import { ActorController } from './actor/actor.controller';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [MovieModule, PrismaModule, ActorModule, ReviewModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes(ActorController);
  }
}
