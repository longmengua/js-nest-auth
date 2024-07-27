import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategy/google.strategy';
import { AppleStrategy } from './strategy/apple.strategy';

@Module({
  controllers: [AuthController],
  providers: [GoogleStrategy, AppleStrategy],
})
export class AuthModule {}
