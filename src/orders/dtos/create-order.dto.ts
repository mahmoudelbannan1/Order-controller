import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  readonly orderName: string;
  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;
}
