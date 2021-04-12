import { Router } from 'express';
import { create, update, destroy } from './controller';

const router = new Router();

/**
 * @api {post} /admin/exercises Create exercise
 * @apiName CreateExercise
 * @apiGroup Exercise
 * @apiPermission admin
 * @apiHeader {String} Authorization Bearer Token.
 * @apiParam {String} name (exercise name).
 * @apiParam {Number} sets (number of sets).
 * @apiParam {Number} counts (counts per set).
 * @apiSuccess (Sucess 200) {Object} Exercise's data.
 */

router.post('/', create);

/**
 * @api {put} /admin/exercises/:id Update exercise
 * @apiName UpdateExercise
 * @apiGroup Exercise
 * @apiPermission admin
 * @apiHeader {String} Authorization Bearer Token.
 * @apiParam {Number} id (exercise id).
 * @apiParam {String} name (exercise name).
 * @apiParam {Number} sets (number of sets).
 * @apiParam {Number} counts (counts per set).
 * @apiSuccess (Sucess 200) {Object} Exercise's data.
 */

router.put('/:id', update);

/**
 * @api {delete} /admin/exercises/:id Delete exercise
 * @apiName DeleteExercise
 * @apiGroup Exercise
 * @apiPermission admin
 * @apiHeader {String} Authorization Bearer Token.
 * @apiParam {Number} id (exercise id).
 * @apiSuccess (Sucess 200) Deleted.
 */
router.delete('/:id', destroy);

export default router;
