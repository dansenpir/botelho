import { CatalogRepository } from '../repositories/CatalogRepository';

export default class FindOneCatalog {
  private repository;

  constructor(repository: CatalogRepository) {
    this.repository = repository;
  }

  public async execute(service: string) {
    return await this.repository.findOneByService(service);
  }
}
