import { IShowcase } from '../../../interfaces';
import { prisma as db } from '../../../lib/prisma';

export class ShowcaseRepository {
  async create({
    catalog_service,
    amount,
    access_type,
    id_user,
    status,
  }: IShowcase) {
    return await db.showcase.create({
      data: {
        catalog_service,
        amount,
        access_type,
        id_user,
        status,
      },
    });
  }

  async delete(id: number) {
    return await db.showcase.delete({
      where: { id },
    });
  }

  async findAll() {
    return await db.showcase.findMany({
      include: {
        service: true,
        user: true,
      },
    });
  }

  async findOneById(id: number) {
    return await db.showcase.findUnique({
      where: { id },
    });
  }
}
