import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async signUp({ email, password }: AuthDto): Promise<User> {
    try {
      const hash = await argon.hash(password);

      const user = await this.prismaService.user.create({
        data: {
          email,
          hash,
        },
      });

      delete user.hash;

      return user;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ForbiddenException('Credentials taken');
      }
    }
  }

  signIn() {
    return { msg: 'I have signed in' };
  }
}
