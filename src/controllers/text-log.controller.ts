import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  ParseIntPipe,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiNoContentResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { TextLogService } from '../services/text-log.service';
import { CreateTextLogDto } from '../dto/create-text-log.dto';
import { UpdateTextLogDto } from '../dto/update-text-log.dto';
import { TextLog } from '../entities/text-log.entity';

@ApiTags('text-logs')
@Controller('text-logs')
export class TextLogController {
  constructor(private readonly textLogService: TextLogService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new text log',
    description:
      'Creates a new text log entry in the database with the provided content and optional title.',
  })
  @ApiBody({ type: CreateTextLogDto })
  @ApiCreatedResponse({
    description: 'Text log created successfully.',
    type: TextLog,
  })
  @ApiBadRequestResponse({ description: 'Invalid input data.' })
  create(@Body(ValidationPipe) createTextLogDto: CreateTextLogDto) {
    return this.textLogService.create(createTextLogDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all text logs',
    description:
      'Retrieves all text logs from the database, ordered by creation date (newest first).',
  })
  @ApiOkResponse({
    description: 'Text logs retrieved successfully.',
    type: [TextLog],
  })
  findAll() {
    return this.textLogService.findAll();
  }

  @Get('count')
  @ApiOperation({
    summary: 'Get total count of text logs',
    description: 'Returns the total number of text logs in the database.',
  })
  @ApiOkResponse({
    description: 'Count retrieved successfully.',
    schema: {
      type: 'number',
      example: 42,
    },
  })
  count() {
    return this.textLogService.count();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a specific text log',
    description: 'Retrieves a single text log by its ID.',
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'The ID of the text log to retrieve',
    example: 1,
  })
  @ApiOkResponse({
    description: 'Text log found and retrieved successfully.',
    type: TextLog,
  })
  @ApiNotFoundResponse({
    description: 'Text log with the specified ID not found.',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.textLogService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a text log',
    description: 'Updates an existing text log with new content and/or title.',
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'The ID of the text log to update',
    example: 1,
  })
  @ApiBody({ type: UpdateTextLogDto })
  @ApiOkResponse({
    description: 'Text log updated successfully.',
    type: TextLog,
  })
  @ApiNotFoundResponse({
    description: 'Text log with the specified ID not found.',
  })
  @ApiBadRequestResponse({ description: 'Invalid input data.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateTextLogDto: UpdateTextLogDto,
  ) {
    return this.textLogService.update(id, updateTextLogDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a text log',
    description: 'Deletes a text log by its ID.',
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'The ID of the text log to delete',
    example: 1,
  })
  @ApiNoContentResponse({ description: 'Text log deleted successfully.' })
  @ApiNotFoundResponse({
    description: 'Text log with the specified ID not found.',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.textLogService.remove(id);
  }
}
