import { IShowcase } from '../../../interfaces';
import { ShowcaseRepository } from '../repositories/ShowcaseRepository';

export default class CreateShowcase {
  private repository;

  constructor(repository: ShowcaseRepository) {
    this.repository = repository;
  }

  public async execute({
    access_type,
    amount,
    catalog_service,
    id_user,
    status,
  }: IShowcase) {
    await this.repository.create({
      access_type,
      amount,
      catalog_service,
      id_user,
      status,
    });
  }
}
