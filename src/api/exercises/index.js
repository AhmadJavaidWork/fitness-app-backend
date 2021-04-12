import { Router } from 'express';
import {
  password as passwordAuth,
  master,
  token,
} from '../../services/passport';
import { getAll, get } from './controller';

const router = new Router();

/**
 * @api {get} /exercises Retrieve all exercises
 * @apiName RetrieveAllExercises
 * @apiGroup Exercise
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiSuccess {Object} All Exercise.
 */

router.get('/', getAll);

/**
 * @api {get} /exercises/:id Retrieve single exercise
 * @apiName RetrieveSingleExercise
 * @apiGroup Exercise
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiSuccess {Object} Exercise's data.
 */

router.get('/:id', get);

export default router;
