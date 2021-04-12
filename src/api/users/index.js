import { Router } from 'express';
import {
  password as passwordAuth,
  master,
  token,
} from '../../services/passport';
import { showMe, register, update, changePassword } from './controller';

const router = new Router();

/**
 * @api {get} /users/me Retrieve current user
 * @apiName RetrieveCurrentUser
 * @apiGroup User
 * @apiPermission user
 * @apiHeader {String} Authorization Bearer Token.
 * @apiSuccess {Object} user User's data.
 */

router.get('/me', token({ required: true }), showMe);

/**
 * @api {post} /users/register Register user
 * @apiName RegisterUser
 * @apiGroup User
 * @apiPermission master
 * @apiParam {String} access_token Master access_token.
 * @apiParam {String} email User's email.
 * @apiParam {String} password User's password.
 * @apiParam {String} [name] User's name.
 * @apiSuccess (Sucess 201) {Object} user User's data.
 */

router.post('/register', master(), register);

/**
 * @api {put} /users/:id Update user
 * @apiName UpdateUser
 * @apiGroup User
 * @apiPermission user
 * @apiHeader {String} Authorization Bearer Token.
 * @apiParam {String} email User's email.
 * @apiParam {String} [name] User's name.
 * @apiSuccess (Sucess 200) {Object} status: 200.
 */

router.put('/:id', token({ required: true }), update);

/**
 * @api {post} /users/change-password Change password
 * @apiName ChangePassword
 * @apiGroup User
 * @apiHeader {String} Authorization Basic authorization with email and password.
 * @apiParam {String} password User's new password.
 * @apiSuccess (Sucess 201) {Object} status: 200.
 */

router.post('/change-password', passwordAuth(), changePassword);

export default router;
