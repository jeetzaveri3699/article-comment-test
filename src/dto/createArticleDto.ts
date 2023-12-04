import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateArticleDto {
  @IsString()
  @MinLength(5, {
    message: 'nickName is too short. Minimal length is $constraint1 characters, but actual is $value',
  })
  @MaxLength(15, {
    message: 'nickName is too long. Maximal length is $constraint1 characters, but actual is $value',
  })
  nickName!: string

  @IsString()
  @MinLength(3, {
    message: 'title is too short. Minimal length is $constraint1 characters, but actual is $value',
  })
  @MaxLength(50, {
    message: 'title is too long. Maximal length is $constraint1 characters, but actual is $value',
  })
  title!: string

  @IsString()
  @MinLength(10, {
    message: 'content is too short. Minimal length is $constraint1 characters, but actual is $value',
  })
  content!: string
}