import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { OrderItem } from './orders/entities/order-item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ordem-compras-db',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'ordemCompras',
      entities: [Product, Order, OrderItem],
      synchronize: true,
      logging: true,
    }),
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController], // mvc controllers's module
  providers: [AppService],
})
export class AppModule {}
