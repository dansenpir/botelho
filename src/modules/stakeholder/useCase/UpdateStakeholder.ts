import { IStakeholder } from '../../../interfaces/IStakeholder';
import { StakeholderRepository } from '../repositories/StakeholderRepository';

export default class UpdateStakeholder {
  private repository;

  constructor(repository: StakeholderRepository) {
    this.repository = repository;
  }

  public async execute({ catalog_service, id_user }: IStakeholder) {
    await this.repository.update({ catalog_service, id_user });
  }
}
