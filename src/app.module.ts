import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [OrdersModule, UsersModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
