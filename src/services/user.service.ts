import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User } from '../types/users.types';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: User): Promise<User> => {
    const userCreated = await this.model.create(user);
    return userCreated;
  };
}

export default UserService;