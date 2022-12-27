import { ShowcaseRepository } from '../repositories/ShowcaseRepository';

export default class FindOneShowcase {
  private repository;

  constructor(repository: ShowcaseRepository) {
    this.repository = repository;
  }

  public async execute(id: number) {
    return await this.repository.findOneById(id);
  }
}
