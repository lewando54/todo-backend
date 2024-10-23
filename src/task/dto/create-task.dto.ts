import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto implements Prisma.TaskCreateInput {
  @IsString()
  @ApiProperty({
    type: String,
  })
  title: string;
  @IsString()
  @ApiProperty({
    type: String,
  })
  description: string;
}
