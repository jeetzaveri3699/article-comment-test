import { IsInt, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCommentDto {
  @IsString()
  @MinLength(5, {
    message:
      "nickName is too short. Minimal length is $constraint1 characters, but actual is $value",
  })
  @MaxLength(15, {
    message:
      "nickName is too long. Maximal length is $constraint1 characters, but actual is $value",
  })
  nickName!: string;

  @IsString()
  @MinLength(5, {
    message:
      "content is too short. Minimal length is $constraint1 characters, but actual is $value",
  })
  content!: string;

  @IsInt()
  articleId!: number | undefined;

  @IsInt()
  commentId!: number | undefined;
}
