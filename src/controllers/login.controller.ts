import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import generationToken from '../auth/validateJWT';

class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req:Request, res:Response) => {
    const { username, password } = req.body;
    
    const user = await this.loginService.login(username, password);

    const token = generationToken(user.username);

    return res.status(200).json({ token });
  };
}

export default LoginController;