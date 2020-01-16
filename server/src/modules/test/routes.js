  
import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';


import testController from './testController';

const router = expressAsyncAwait(Router());
router.get('/', testController);

export default router;