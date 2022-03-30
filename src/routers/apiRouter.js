import { Router } from 'express';

import apiController from '../controllers/apiController.js';

const router = Router();

router.post('/urls', apiController.uploadUrl);

export default router;
