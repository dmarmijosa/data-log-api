import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextLog } from '../entities/text-log.entity';
import { TextLogService } from '../services/text-log.service';
import { TextLogController } from '../controllers/text-log.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TextLog])],
  controllers: [TextLogController],
  providers: [TextLogService],
  exports: [TextLogService],
})
export class TextLogModule {}
