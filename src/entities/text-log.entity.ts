import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity('text_logs')
export class TextLog {
  @ApiProperty({
    description: 'Unique identifier of the text log',
    example: 1,
    readOnly: true,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Content of the text log',
    example: 'This is a sample text content for the log entry.',
    maxLength: 10000,
  })
  @Column({ type: 'text' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(10000)
  content: string;

  @ApiProperty({
    description: 'Optional title for the text log',
    example: 'My Log Entry',
    maxLength: 200,
    required: false,
  })
  @Column({ nullable: true })
  title?: string;

  @ApiProperty({
    description: 'Date and time when the log was created',
    example: '2025-08-05T10:30:00.000Z',
    readOnly: true,
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'Date and time when the log was last updated',
    example: '2025-08-05T10:30:00.000Z',
    readOnly: true,
  })
  @UpdateDateColumn()
  updatedAt: Date;
}
