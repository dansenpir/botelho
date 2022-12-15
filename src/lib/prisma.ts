import { env } from '../config/vars';
import { PrismaClient } from '@prisma/client';
export let prisma: PrismaClient;

if (env === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
