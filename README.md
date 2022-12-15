# Template API (backend)

## Stacks
- TypeScript
- NodeJS
- Express
- Prisma
- PostgreSQL
- Docker
## Como usar este template?

- Instale e atualize as dependências do projeto:
```bash
yarn && yarn upgrade-interactive --latest
```

- Crie um arquivo `.env.dev` com base no exemple `.env.example`;

- Se for utilizar as interfaces fornecidas pelo ORM Prisma, faça o export no arquivo `src/lib/prisma.ts`, como no exemplo:

```ts
import { env } from '../config/vars';
import { PrismaClient } from '@prisma/client';

export {
  User as IUser,
  Product as IProduct,
} from '@prisma/client';

export let prisma: PrismaClient;

if (env === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}
```
