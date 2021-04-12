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
 * @apiError 401 Admin access only.
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
 * @apiError 401 Admin access only.
 */

router.put('/:id', update);

/**
 * @api {delete} /admin/exercises/:id Delete exercise
 * @apiName DeleteExercise
 * @apiGroup Exercise
 * @apiPermission admin
 * @apiParam {String} access_token (admin access_token).
 * @apiParam {Number} id (exercise id).
 * @apiSuccess (Sucess 200) Deleted.
 * @apiError 401 Admin access only.
 */
router.delete('/:id', destroy);

export default router;
