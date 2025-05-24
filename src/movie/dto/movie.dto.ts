import { ApiProperty } from '@nestjs/swagger';

export class MovieResponse {
  @ApiProperty({
    description: 'id фильма',
    example: '123',
    type: 'string',
  })
  id: string;
  @ApiProperty({
    description: 'Название фильма',
    example: 'Red notifice',
    type: 'string',
  })
  title: string;
}
