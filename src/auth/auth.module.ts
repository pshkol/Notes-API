import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./jwt.strategy";
import config from "../config";
import { ConfigModule, ConfigService, ConfigType } from "@nestjs/config";

@Module({
  // imports: [UserModule, PassportModule, JwtModule.register({
  //   secret: jwtConstants.secret,
  //   signOptions: { expiresIn: '60s' }
  // })],
  imports: [UserModule, PassportModule, JwtModule.registerAsync({
    inject: [config.KEY],
    useFactory: (configService: ConfigType<typeof config>) => {
      return {
        secret: configService.secretKey,
        signOptions: { expiresIn: '60s' }
      }
    }
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}