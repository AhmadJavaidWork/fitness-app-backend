import { Router } from 'express';
import {
  password as passwordAuth,
  master,
  token,
} from '../../services/passport';
import { showMe, register, update, updatePassword } from './controller';

const router = new Router();

/**
 * @api {get} /users/me Retrieve current user
 * @apiName RetrieveCurrentUser
 * @apiGroup User
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiSuccess {Object} user User's data.
 */

router.get('/me', token({ required: true }), showMe);

/**
 * @api {post} /users/register Create user
 * @apiName CreateUser
 * @apiGroup User
 * @apiPermission master
 * @apiParam {String} access_token Master access_token.
 * @apiParam {String} email User's email.
 * @apiParam {String{6..}} password User's password.
 * @apiParam {String} [name] User's name.
 * @apiSuccess (Sucess 201) {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Master access only.
 * @apiError 409 Email already registered.
 */

router.post('/register', master(), register);
router.put('/:id', token({ required: true }), update);
router.put('/:id/password', passwordAuth(), updatePassword);

export default router;
