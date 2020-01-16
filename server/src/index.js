
import { app } from './server';

import { setupLogging } from './logging';
const { PORT = 3030 } = process.env;

setupLogging();

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}!`);
});