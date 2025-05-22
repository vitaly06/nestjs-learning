import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export enum Genre {
  ACTION = 'action',
  COMEDY = 'comedy',
  DRAMA = 'drama',
  HORROR = 'horror',
}

export class CreateMovieDto {
  @IsNotEmpty({ message: 'Название не может быть пустым' })
  @IsString({ message: 'Название должно быть строкой' })
  title: string;
  @IsOptional()
  @IsString({ message: 'Описание должно быть строкой' })
  description: string;
  @IsNumber({}, { message: 'Год выпуска фильма должен быть числом' })
  @IsPositive({ message: 'Год выпуска фильма не должен быть отрицательным' })
  @IsInt({ message: 'Год выпуска фильма должен быть целым числом' })
  releaseYear: number;
  @IsNumber({}, { message: 'Оценка фильма должна быть числом' })
  rating: number;
  @IsBoolean({ message: 'Доступность фильма должна быть булевым значением' })
  isAvailable: boolean;
  @IsEnum(Genre, { message: 'Недопустимый жанр' })
  genre: string;
}
