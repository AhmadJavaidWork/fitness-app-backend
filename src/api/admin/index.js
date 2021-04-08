import { Router } from 'express';
import exercises from './exercises';

const router = new Router();

router.use('/exercises', exercises);

export default router;
