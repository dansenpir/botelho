import { AccessType, Status } from '@prisma/client';

export interface IShowcase {
  id: number;
  catalog_service: string;
  amount: number;
  access_type: AccessType;
  id_user: number;
  status: Status;
}
