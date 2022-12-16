import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import ValidateLogin from '../middleware/validateLogin';

const router = Router();

const loginController = new LoginController();
const validateLogin = new ValidateLogin();

router.post(
  '/login',
  validateLogin.validateUsername,
  validateLogin.validatePassword,
  validateLogin.validateUsernameAndPasswordExists,
  loginController.login,
);

export default router;