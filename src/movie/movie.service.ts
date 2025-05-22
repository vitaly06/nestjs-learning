import { Injectable } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Movie[]> {
    return this.prisma.movie.findMany({
      where: {
        isAvailable: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        actors: {
          select: {
            name: true,
          },
        },
      },
    });
  }
}
