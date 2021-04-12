import { Router } from 'express';
import { signIn, signOut } from './controller';
import { password, master, token } from '../../services/passport';

const router = new Router();

/**
 * @api {post} /auth/sign-in Authenticate
 * @apiName Authenticate
 * @apiGroup Auth
 * @apiPermission master
 * @apiHeader {String} Authorization Basic authorization with email and password.
 * @apiParam {String} access_token Master access_token.
 * @apiSuccess (Success 201) {String} token User `access_token` to be passed to other requests.
 * @apiSuccess (Success 201) {Object} user Current user's data.
 */

router.post('/sign-in', master(), password(), signIn);

/**
 * @api {get} /auth/sign-out Authenticate
 * @apiName Sign Out
 * @apiGroup Auth
 * @apiPermission user
 * @apiHeader {String} Authorization Bearer Token.
 * @apiSuccess (Sucess 200) {Object} status: 200.
 */

router.get('/sign-out', token({ required: true }), signOut);

export default router;
