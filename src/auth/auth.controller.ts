import { Controller, Get, Req, UseGuards, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {
    // This route will initiate the Google login process
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(@Req() req: any) {
    // This route will handle the Google callback after successful authentication
    return req.user;
  }

  @Get('apple')
  @UseGuards(AuthGuard('apple'))
  async appleLogin() {
    // This route will initiate the Apple login process
  }

  @Post('apple/callback')
  // @UseGuards(AuthGuard('apple'))
  async appleCallback(@Req() req: any) {
    // This route will handle the Apple callback after successful authentication
    return req.user;
  }
}
