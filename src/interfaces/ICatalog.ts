import { AccessType } from '@prisma/client';

export interface ICatalog {
  service: string;
  max_amount: number;
  supported_access: AccessType;
}
