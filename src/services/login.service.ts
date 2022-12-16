import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User } from '../types/users.types';

class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public login = async (username:string, password:string): Promise<User> => {
    const user = await this.model.getByNameAndPassword(username, password);

    return user;
  };
}

export default LoginService;