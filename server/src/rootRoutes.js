import { Router } from 'express';

import tasks from './modules/test/routes';

const router = Router();

router.use('/api/test', tasks);


export default router;