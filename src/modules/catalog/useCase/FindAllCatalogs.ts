import { CatalogRepository } from '../repositories/CatalogRepository';

export default class FindAllCatalogs {
  private repository;

  constructor(repository: CatalogRepository) {
    this.repository = repository;
  }

  public async execute() {
    return await this.repository.findAll();
  }
}
