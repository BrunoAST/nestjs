import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  signUp() {
    return { msg: 'I have signed up' };
  }

  signIn() {
    return { msg: 'I have signed in' };
  }
}
