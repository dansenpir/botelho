import { ShowcaseRepository } from '../repositories/ShowcaseRepository';

export default class FindAllShowcases {
  private repository;

  constructor(repository: ShowcaseRepository) {
    this.repository = repository;
  }

  public async execute() {
    return await this.repository.findAll();
  }
}
