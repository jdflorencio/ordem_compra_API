import { Product } from 'src/products/entities/product.entity';
import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

export enum OrderStatus {
  PENDING = 'pendinng',
  PAID = 'paid',
  FAILED = 'failed',
}

export class Order {
  id: string;
  total: number;
  client_id: number;
  status: OrderStatus = OrderStatus.PENDING;

  created_at: Date;
}

export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  product: Product;

  @Column()
  product_id: string;

  @Column()
  order: Order;
}
