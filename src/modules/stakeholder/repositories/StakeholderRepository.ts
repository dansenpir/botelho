import { IStakeholder } from '../../../interfaces/IStakeholder';
import { prisma as db } from '../../../lib/prisma';

export default class StakeholderRepository {
  async create({ catalog_service, id_user }: IStakeholder) {
    return await db.stakeholder.create({
      data: {
        catalog_service,
        id_user,
      },
    });
  }

  async delete(id_user: number) {
    return await db.stakeholder.delete({
      where: { id_user },
    });
  }

  async findAll() {
    return await db.stakeholder.findMany({
      include: {
        id: true,
        service: true,
      },
    });
  }

  async findOneById(id_user: number) {
    return await db.stakeholder.findUnique({
      where: { id_user },
    });
  }
}
