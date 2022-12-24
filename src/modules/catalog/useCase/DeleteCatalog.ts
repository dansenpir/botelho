import { CatalogRepository } from '../repositories/CatalogRepository';

export default class DeleteCatalog {
  private repository;

  constructor(repository: CatalogRepository) {
    this.repository = repository;
  }

  public async execute(service: string) {
    await this.repository.delete(service);
  }
}
