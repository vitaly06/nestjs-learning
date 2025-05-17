import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString({ message: 'Название задачи должно быть строкой' })
  @IsNotEmpty({ message: 'Название задачи не может быть пустым' })
  @Length(2, 40)
  title: string;
  @IsString({ message: 'Описание должно быть строкой' })
  @IsOptional()
  description: string;

  @IsNumber({}, { message: 'Приоритет должен быть числом' })
  @IsOptional()
  @IsInt({ message: 'Приоритет должен быть целым числом' })
  @IsPositive({ message: 'Приоритет должен быть положительным' })
  priority: number;

  @IsArray({ message: 'Теги должны быть массивом' })
  @IsEnum(TaskTag, {
    each: true,
    message: 'Недопустимый тэг',
  })
  @IsOptional()
  tags: TaskTag[];

  /*
  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(6, { message: 'Пароль должен содержать не менее 6 символов' })
  @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/, {
    message: 'Пароль должен содержать хотя бы одну заглавную букву и цифру',
  })
  password: string;
  @IsUrl(
    {
      protocols: ['https'],
      require_protocol: true,
      require_valid_protocol: true, // проверка на существующие протоколы
      host_blacklist: ['google.com'],
    },
    { message: 'Неккоректный формат ссылки' },
  )
  websiteUrl: string;

  @IsUUID('4', { message: 'Неккоректный формат UUID' })
  userId: string;
  */
}
