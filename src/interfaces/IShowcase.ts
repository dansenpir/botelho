import { AccessType, Status } from '@prisma/client';

export interface IShowcase {
  catalog_service: string;
  amount: number;
  access_type: AccessType;
  id_user: number;
  status: Status;
}

export interface IShowcaseUpdate extends IShowcase {
  id: number;
}
