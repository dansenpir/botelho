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
}
