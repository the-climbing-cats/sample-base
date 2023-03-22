import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreatePostDto {
  @ApiProperty({
    type: String,
    example: 'PostTitle',
  })
  @IsNotEmpty()
  @IsString()
  title: string

  @ApiProperty({
    type: String,
    example: 'description, lorem ipsum',
  })
  @IsNotEmpty()
  @IsString()
  content: string
}
