import { Router } from 'express';
import { token } from '../services/passport';
import admin from './admin';
import user from './user';
import auth from './auth';
import exercises from './exercises';

const router = new Router();

router.use('/admin', token({ required: true, roles: ['admin'] }), admin);
router.use('/users', user);
router.use('/auth', auth);
router.use('/exercises', token({ required: true }), exercises);

export default router;
