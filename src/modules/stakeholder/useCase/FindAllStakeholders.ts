import { StakeholderRepository } from '../repositories/StakeholderRepository';

export default class FindAllStakeholders {
  private repository;

  constructor(repository: StakeholderRepository) {
    this.repository = repository;
  }

  public async execute() {
    return await this.repository.findAll();
  }
}
