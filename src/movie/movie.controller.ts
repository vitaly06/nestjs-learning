import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from '@prisma/client';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('all-movies')
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
}
