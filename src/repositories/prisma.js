import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export default prisma;
