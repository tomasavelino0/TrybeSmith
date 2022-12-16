import { Pool } from 'mysql2/promise';
import { Order } from '../types/orders.types';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async () :Promise<Order[]> => {
    const [orders] = await this.connection.execute(
      `SELECT orde.id as id, orde.user_id as userId,JSON_ARRAYAGG(product.id) 
        as productsIds FROM Trybesmith.orders as orde
        INNER JOIN Trybesmith.products as product on orde.id = product.order_id
        GROUP BY orde.id;`,
    );

    return orders as Order[];
  };
}