import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import Redis from 'ioredis';

@Module({
  imports: [Redis, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
