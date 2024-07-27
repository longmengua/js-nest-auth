import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import {
  Controller,
  Get,
  UseGuards,
  Req,
  Post,
  Body,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {
    // This route will initiate the Google login process
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(@Req() req: any) {
    return req.user;
  }

  @Get('apple')
  async appleLogin(@Res() res: Response) {
    const url = await this.service.getAppleAuthorizeURL();
    res.redirect(url);
  }

  @Post('apple/callback')
  public async appleCallback(@Body() payload: any) {
    return this.service.verifyAppleUser(payload);
  }
}
