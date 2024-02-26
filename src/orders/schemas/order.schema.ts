import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Order {
  @Prop({ unique: true })
  orderName: string;
  @Prop()
  amount: number;
}

export const orderSchema = SchemaFactory.createForClass(Order);
