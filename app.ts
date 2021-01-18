import {Application} from 'https://deno.land/x/oak/mod.ts';

import router from './routes.ts';
import {parse} from 'https://deno.land/std/flags/mod.ts';

const {args} = Deno;

const DEFAULT_PORT = 8000;
const argPort = parse(args).port;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port: argPort ? Number(argPort) : DEFAULT_PORT});
