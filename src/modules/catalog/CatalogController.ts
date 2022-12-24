import { Request, Response } from 'express';
import { CatalogRepository } from './repositories/CatalogRepository';
import { ICatalog } from '../../interfaces';
import CreateCatalog from './useCase/CreateCatalog';
import DeleteCatalog from './useCase/DeleteCatalog';
import FindAllCatalogs from './useCase/FindAllCatalogs';
import FindOneCatalog from './useCase/FindOneCatalog';
import UpdateCatalog from './useCase/UpdateCatalog';

const repository = new CatalogRepository();

export default class CatalogController {
  static async create(req: Request, res: Response) {
    const { service, max_amount, supported_access }: ICatalog = req.body;

    const createCatalog = new CreateCatalog(repository);

    await createCatalog.execute({ service, max_amount, supported_access });

    return res.sendStatus(201);
  }

  static async delete(req: Request, res: Response) {
    const { service } = req.body;

    const deleteCatalog = new DeleteCatalog(repository);

    await deleteCatalog.execute(service);

    return res.sendStatus(200);
  }

  static async findAll(res: Response) {
    const findAllCatalogs = new FindAllCatalogs(repository);

    const catalogs = await findAllCatalogs.execute();

    return res.status(200).json(catalogs);
  }

  static async findOneByService(req: Request, res: Response) {
    const { service } = req.body;

    const findOneCatalog = new FindOneCatalog(repository);

    const catalog = await findOneCatalog.execute(service);

    return res.status(200).json(catalog);
  }

  static async update(req: Request, res: Response) {
    const { service, max_amount, supported_access }: ICatalog = req.body;

    const updateCatalog = new UpdateCatalog(repository);

    await updateCatalog.execute({ service, max_amount, supported_access });

    return res.sendStatus(200);
  }
}
