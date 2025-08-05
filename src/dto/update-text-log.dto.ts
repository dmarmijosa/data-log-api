import { PartialType } from '@nestjs/mapped-types';
import { CreateTextLogDto } from './create-text-log.dto';

export class UpdateTextLogDto extends PartialType(CreateTextLogDto) {}
