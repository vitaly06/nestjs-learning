import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import {
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieResponse } from './dto/movie.dto';

@ApiTags('Movie')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  @ApiOperation({
    summary: 'Список всех фильмов',
    description: 'Этот метод возвращает список всех фильмов',
  })
  @ApiOkResponse({
    description: 'Фильмы успешно получены',
    type: [MovieResponse],
  })
  findAll() {
    return [
      {
        id: 1,
        title: 'Red notifice',
      },
      {
        id: 2,
        title: 'Deadpool',
      },
    ];
  }

  @Get('/by-id/:id')
  @ApiOperation({
    summary: 'Фильм по id',
    description: 'Этот метод возвращает фильм по заданному id',
  })
  @ApiOkResponse({
    description: 'Фильм успешно получен',
  })
  @ApiNotFoundResponse({
    description: 'Фильм не найден',
    example: {
      status: 404,
      message: 'Movie not found',
      path: '/movie/123',
    },
  })
  @ApiHeader({
    name: 'X-Auth-Token',
    description: 'Токен авторизации',
  })
  findById(@Param('id') id: string, @Query('year') year: number) {
    return [
      {
        id: +id,
        title: 'Red notifice',
        year,
      },
    ];
  }

  @ApiOperation({
    summary: 'Создать фильм',
  })
  @Post()
  create(@Body() dto: CreateMovieDto) {
    return dto;
  }
}
