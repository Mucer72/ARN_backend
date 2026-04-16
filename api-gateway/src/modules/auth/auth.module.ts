import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthClient } from '../../grpc/clients/auth.clients';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: process.env.AUTH_SERVICE_URL,
          package: 'auth',
          protoPath: '/app/proto-contracts/auth.proto',
        },
      },
    ]),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthClient],
  exports: [AuthClient],
})
export class AuthModule {}