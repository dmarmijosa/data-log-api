import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Welcome message',
    description: 'Returns a welcome message for the Data Log API',
  })
  @ApiOkResponse({
    description: 'Welcome message returned successfully',
    schema: {
      type: 'string',
      example:
        'Hello World! Welcome to Data Log API - NestJS app for storing text data',
    },
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  @ApiOperation({
    summary: 'Health check',
    description: 'Returns the current health status of the API',
  })
  @ApiOkResponse({
    description: 'Health status returned successfully',
    schema: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          example: 'OK',
        },
        message: {
          type: 'string',
          example: 'Data Log API is running',
        },
        timestamp: {
          type: 'string',
          format: 'date-time',
          example: '2025-08-05T10:30:00.000Z',
        },
      },
    },
  })
  getHealth() {
    return {
      status: 'OK',
      message: 'Data Log API is running',
      timestamp: new Date().toISOString(),
    };
  }
}
