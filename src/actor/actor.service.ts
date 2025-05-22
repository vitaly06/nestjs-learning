import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { Actor } from '@prisma/client';

@Injectable()
export class ActorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateActorDto): Promise<Actor> {
    const { name } = { ...dto };

    const actor = await this.prisma.actor.create({
      data: {
        name,
      },
    });

    return actor;
  }

  async findById(id: number): Promise<Actor> {
    const actor = await this.prisma.actor.findUnique({
      where: { id },
    });
    if (!actor) {
      throw new BadRequestException(`Актёр с id ${id} не найден`);
    }
    return actor;
  }
}
