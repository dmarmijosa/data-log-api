import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Welcome to Data Log API - NestJS app for storing text data';
  }
}
