import { Product } from '../../products/entities/product.entity';

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' }) // especificando com sera o name da chave estrangeria por padrao seria camelCase "produtoId"
  product: Product;

  @Column()
  product_id: string;

  @ManyToOne(() => Order)
  order: Order;
}
