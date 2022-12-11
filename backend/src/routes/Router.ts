import { Router } from 'express';
import AuthMiddleware from '../middleware/authToken';
import UserController from '../controllers/UserController';
import ListController from '../controllers/ListController';

const { authToken } = AuthMiddleware;
const { login } = UserController;
const { getFriendlist } = ListController;

const router = Router();

router.post('/login', login);
router.get('/friendlist', authToken, getFriendlist);

export default router;
