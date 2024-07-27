import { Injectable } from '@nestjs/common';
import { Config } from 'src/config/configuration';
// import { decodeAndVerifyIdToken } from 'src/util/apple.jwt';
import { generateShortUUID } from 'src/util/uuid';
import { decode } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  async getAppleAuthorizeURL(): Promise<string> {
    const redirectUrl =
      Config.apple.authorizeURL +
      `?response_type=code id_token` +
      `&response_mode=form_post` +
      `&client_id=${Config.apple.clientID}` +
      `&redirect_uri=${Config.apple.callbackURL}` +
      `&state=${generateShortUUID()}` +
      `&scope=name email`;
    return redirectUrl;
  }

  async verifyAppleUser({ id_token }: { id_token: string }) {
    const jwt = decode(id_token, { complete: true });
    return jwt.payload;
  }
}
