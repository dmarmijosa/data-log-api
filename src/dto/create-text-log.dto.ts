import { IsNotEmpty, IsString, MaxLength, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTextLogDto {
  @ApiProperty({
    description: 'Content of the text log',
    example: 'This is a sample text content for the log entry.',
    maxLength: 10000,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(10000)
  content: string;

  @ApiPropertyOptional({
    description: 'Optional title for the text log',
    example: 'My Log Entry',
    maxLength: 200,
  })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  title?: string;
}
