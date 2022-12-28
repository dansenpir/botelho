import { IStakeholder } from '../../../interfaces/IStakeholder';
import { StakeholderRepository } from '../repositories/StakeholderRepository';

export default class CreateStakeholder {
  private repository;

  constructor(repository: StakeholderRepository) {
    this.repository = repository;
  }

  public async execute({ catalog_service, id_user }: IStakeholder) {
    await this.repository.create({ catalog_service, id_user });
  }
}
