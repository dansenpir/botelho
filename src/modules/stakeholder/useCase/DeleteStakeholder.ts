import { StakeholderRepository } from '../repositories/StakeholderRepository';

export default class DeleteStakeholder {
  private repository;

  constructor(repository: StakeholderRepository) {
    this.repository = repository;
  }

  public async execute(id: number) {
    return await this.repository.delete(id);
  }
}
