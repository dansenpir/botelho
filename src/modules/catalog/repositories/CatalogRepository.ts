import { ICatalog } from '../../../interfaces';
import { prisma as db } from '../../../lib/prisma';

export class CatalogRepository {
  async create({ service, max_amount, supported_access }: ICatalog) {
    return await db.catalog.create({
      data: {
        service,
        max_amount,
        supported_access,
      },
    });
  }

  async delete(service: string) {
    return await db.catalog.delete({
      where: { service },
    });
  }
}
