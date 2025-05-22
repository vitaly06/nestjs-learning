import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { Actor } from '@prisma/client';

@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post('create-actor')
  async create(@Body() dto: CreateActorDto): Promise<Actor> {
    return this.actorService.create(dto);
  }

  @Get('by-id/:id')
  async findById(@Param('id') id: string): Promise<Actor> {
    return this.actorService.findById(+id);
  }
}
