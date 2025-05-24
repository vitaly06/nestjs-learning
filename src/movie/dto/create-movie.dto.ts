import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({
    description: 'Название фильма',
    example: 'Red notifice',
    type: 'string',
  })
  title: string;
  @ApiProperty({
    description: 'Год релиза',
    example: 2023,
    type: 'number',
  })
  releaseYear: number;
  @ApiPropertyOptional({
    description: 'Ссылка на постер фильма',
    example: 'https://storage.example.com/poster/123456.jpeg',
    type: 'string',
  })
  poster?: string;
  @ApiProperty({
    description: 'Id актёров',
    example: ['65645', '65645', '321'],
    type: [String],
  })
  actorIds: string[];
}
