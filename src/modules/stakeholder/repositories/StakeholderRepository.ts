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
}
