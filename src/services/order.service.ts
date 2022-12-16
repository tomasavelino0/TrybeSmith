import connection from '../models/connection';
import OrderModel from '../models/order.model';
import { Order } from '../types/orders.types';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.model.getAll();

    return orders;
  };
}

export default OrderService;