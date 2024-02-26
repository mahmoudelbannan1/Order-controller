import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dtos/create-order.dto';
import { UpdateOrderDto } from './dtos/update-order.dto';
import { Order } from './schemas/order.schema';
// @UsePipes(ValidationPipe)
@Controller('users/:userId/orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}
  @Get()
  async find(): Promise<Order[]> {
    return this.orderService.find();
  }
  @Get(':id')
  async findOne(
    @Param('userId', ParseIntPipe) userId: string,
    @Param('id') id: string,
  ): Promise<Order> {
    return this.orderService.findOne(userId, id);
  }
  @Post()
  async create(
    @Param('userId', ParseIntPipe) userId: string,
    @Body() orderData: CreateOrderDto,
  ): Promise<Order> {
    return this.orderService.create(userId, orderData);
  }
  @Patch(':id')
  async update(
    @Param('userId', ParseIntPipe) userId: string,
    @Param('id') id: string,
    @Body() orderData: UpdateOrderDto,
  ): Promise<Order> {
    return this.orderService.update(userId, id, orderData);
  }
  @Delete(':id')
  @HttpCode(204)
  async remove(
    @Param('userId', ParseIntPipe) userId: string,
    @Param('id') id: string,
  ): Promise<Order> {
    return this.orderService.remove(userId, id);
  }
}
