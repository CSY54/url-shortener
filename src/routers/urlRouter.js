import { Router } from 'express';

import urlController from '../controllers/urlController.js';

const router = Router();

router.get('/:urlId', urlController.redirectUrl);

export default router;
