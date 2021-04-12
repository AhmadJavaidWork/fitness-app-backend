import { Router } from 'express';
import { getAll, get } from './controller';

const router = new Router();

/**
 * @api {get} /exercises Retrieve all exercises
 * @apiName RetrieveAllExercises
 * @apiGroup Exercise
 * @apiPermission user
 * @apiHeader {String} Authorization Bearer Token.
 * @apiSuccess {Object} All Exercise.
 */

router.get('/', getAll);

/**
 * @api {get} /exercises/:id Retrieve single exercise
 * @apiName RetrieveSingleExercise
 * @apiGroup Exercise
 * @apiPermission user
 * @apiHeader {String} Authorization Bearer Token.
 * @apiSuccess {Object} Exercise's data.
 */

router.get('/:id', get);

export default router;
