import { Injectable } from '@nestjs/common';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
})
@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the Wholesale store management API!';
  }
}
