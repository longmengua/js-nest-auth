import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-apple';
import { Config } from 'src/config/configuration';

@Injectable()
export class AppleStrategy extends PassportStrategy(Strategy, 'apple') {
  constructor() {
    super({
      clientID: Config.apple.clientID,
      teamID: Config.apple.teamId,
      keyID: Config.apple.keyID,
      key: Config.apple.key,
      callbackURL: Config.apple.callbackURL,
      passReqToCallback: false,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, emails } = profile;
    const user = {
      id,
      email: emails[0].value,
    };
    done(null, user);
  }
}
