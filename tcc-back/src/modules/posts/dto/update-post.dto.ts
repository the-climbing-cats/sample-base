import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdatePostDto {
  @ApiProperty({
    type: String,
    example: 'PostTitle',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title: string

  @ApiProperty({
    type: String,
    example: 'description, lorem ipsum',
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  content: string
}
