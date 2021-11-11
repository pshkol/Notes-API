import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./constans";
import { ConfigType } from "@nestjs/config";
import config from "../config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(config.KEY) configService: ConfigType<typeof config>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // secretOrKey: jwtConstants.secret
      secretOrKey: configService.secretKey
    })
  }

  validate(payload: any) {
    return { id: payload.sub, username: payload.username }
  }
}