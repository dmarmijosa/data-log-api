import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TextLog } from '../entities/text-log.entity';
import { CreateTextLogDto } from '../dto/create-text-log.dto';
import { UpdateTextLogDto } from '../dto/update-text-log.dto';

@Injectable()
export class TextLogService {
  constructor(
    @InjectRepository(TextLog)
    private textLogRepository: Repository<TextLog>,
  ) {}

  async create(createTextLogDto: CreateTextLogDto): Promise<TextLog> {
    const textLog = this.textLogRepository.create(createTextLogDto);
    return await this.textLogRepository.save(textLog);
  }

  async findAll(): Promise<TextLog[]> {
    return await this.textLogRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<TextLog> {
    const textLog = await this.textLogRepository.findOne({
      where: { id },
    });

    if (!textLog) {
      throw new NotFoundException(`TextLog with ID ${id} not found`);
    }

    return textLog;
  }

  async update(
    id: number,
    updateTextLogDto: UpdateTextLogDto,
  ): Promise<TextLog> {
    const textLog = await this.findOne(id);

    Object.assign(textLog, updateTextLogDto);
    return await this.textLogRepository.save(textLog);
  }

  async remove(id: number): Promise<void> {
    const textLog = await this.findOne(id);
    await this.textLogRepository.remove(textLog);
  }

  async count(): Promise<number> {
    return await this.textLogRepository.count();
  }
}
