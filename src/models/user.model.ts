import { Pool, ResultSetHeader } from 'mysql2/promise';

import { User } from '../types/users.types';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: User): Promise<User> => {
    const { username, vocation, level, password } = user;
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.users (username, vocation, level, password)
      VALUES (?, ?, ?, ?)`,
      [username, vocation, level, password],
    );

    return { id: Number(dataInserted.insertId), ...user };
  };

  public getByNameAndPassword = async (userName: string, password: string): Promise<User> => {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.users WHERE username=? AND password=?',
      [userName, password],
    );
    const [user] = result as User[];
    return user;
  };
}