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

  async findOneById(id: number) {
    return await db.user.findUnique({
      where: { id },
    });
  }

  async update({ id, username }: IUser) {
    return await db.user.update({
      where: { id },
      data: {
        id,
        username,
      },
    });
  }
}
