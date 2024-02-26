import { Injectable, NotFoundException } from '@nestjs/common';
// import { v4 as uuid } from 'uuid';
import { CreateOrderDto } from './dtos/create-order.dto';
import { UpdateOrderDto } from './dtos/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './schemas/order.schema';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async find(): Promise<Order[]> {
    return await this.orderModel.find();
  }
  async findOne(userId: string, id: string): Promise<Order> {
    const order = await this.orderModel.findById(id);
    if (!order) {
      throw new NotFoundException('not found order ');
    } else {
      return order;
    }
  }
  async create(userId: string, orderData: CreateOrderDto): Promise<Order> {
    const newOrder = this.orderModel.create({
      createdBy: userId,
      ...orderData,
    });
    return newOrder;
  }
  async update(
    userId: string,
    id: string,
    orderData: UpdateOrderDto,
  ): Promise<Order> {
    const updatedOrder = this.orderModel.findOneAndUpdate(
      { _id: id },
      orderData,
    );
    if (!updatedOrder) {
      throw new NotFoundException('not found order');
    } else {
      return updatedOrder;
    }
  }
  async remove(userId: string, id: string): Promise<Order> {
    const deletedOrder = this.orderModel.findByIdAndDelete(id);
    if (!deletedOrder) {
      throw new NotFoundException('order not found');
    }
    return deletedOrder;
  }
}
