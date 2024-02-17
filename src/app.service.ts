import { Injectable } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`),
  ],
})
@Injectable()
export class AppService {
  getHello(): string {
    console.log(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

    return 'Welcome to the Wholesale store management API!';
  }
}
