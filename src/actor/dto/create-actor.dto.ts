import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateActorDto {
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя не может быть пустым' })
  @MinLength(6, { message: 'Имя должно быть не короче 6 символов' })
  name: string;
}
