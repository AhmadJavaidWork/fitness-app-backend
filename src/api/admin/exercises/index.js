import { Router } from 'express';
import { create, update, destroy } from './controller';

const router = new Router();

/**
 * @api {post} /admin/exercises Create exercise
 * @apiName CreateExercise
 * @apiGroup Exercise
 * @apiPermission admin
 * @apiParam {String} access_token (admin access_token).
 * @apiParam {String} name (exercise name).
 * @apiParam {Number} sets (number of sets).
 * @apiParam {Number} counts (counts per set).
 * @apiSuccess (Sucess 201) {Object} Exercise's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Master access only.
 * @apiError 409 Email already registered.
 */

router.post('/', create);

/**
 * @api {put} /admin/exercises/:id Update exercise
 * @apiName UpdateExercise
 * @apiGroup Exercise
 * @apiPermission admin
 * @apiParam {String} access_token (admin access_token).
 * @apiParam {Number} id (exercise id).
 * @apiParam {String} name (exercise name).
 * @apiParam {Number} sets (number of sets).
 * @apiParam {Number} counts (counts per set).
 * @apiSuccess (Sucess 201) {Object} Exercise's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Master access only.
 * @apiError 409 Email already registered.
 */

router.put('/:id', update);

router.delete('/:id', destroy);

export default router;
