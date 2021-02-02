import {Router} from 'express';
import * as authController from '../controllers/auth.controller';
import {checkDuplicatedUser} from '../middlewares/verifyUser';

const router = Router();

router.post('/signup', checkDuplicatedUser, authController.signup);

router.post('/signin', authController.signin);

router.get('/profile/:id', authController.getUserData);


export default router;