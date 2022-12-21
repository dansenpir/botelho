import { IUser } from '../../../interfaces';
import { prisma as db } from '../../../lib/prisma';

export class UserRepository {
  async create({ id, username }: IUser) {
    return await db.user.create({
      data: {
        id,
        username,
      },
    });
  }
}
