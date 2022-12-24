import { ICatalog } from '../../../interfaces';
import { CatalogRepository } from '../repositories/CatalogRepository';

export default class UpdateCatalog {
  private repository;

  constructor(repository: CatalogRepository) {
    this.repository = repository;
  }

  public async execute({ service, max_amount, supported_access }: ICatalog) {
    await this.repository.update({ service, max_amount, supported_access });
  }
}
