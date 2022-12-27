import { IShowcaseUpdate } from '../../../interfaces';
import { ShowcaseRepository } from '../repositories/ShowcaseRepository';

export default class UpdateShowcase {
  private repository;

  constructor(repository: ShowcaseRepository) {
    this.repository = repository;
  }

  public async execute({
    access_type,
    amount,
    catalog_service,
    id,
    id_user,
    status,
  }: IShowcaseUpdate) {
    return await this.repository.update({
      access_type,
      amount,
      catalog_service,
      id,
      id_user,
      status,
    });
  }
}
