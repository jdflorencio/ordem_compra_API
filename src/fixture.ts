import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      name: 'Product 1',
      description: 'Product 1 description',
      image_url: 'https://via.placeholder.com/158',
      price: 188,
      id: uuidv4(),
    },
    {
      name: 'Product 2',
      description: 'Product 2 description',
      image_url: 'https://via.placeholder.com/158',
      price: 255,
      id: uuidv4(),
    },
    {
      name: 'Product 3',
      description: 'Product 3 description',
      image_url: 'https://via.placeholder.com/158',
      price: 9999,
      id: uuidv4(),
    },
    {
      name: 'Product 4',
      description: 'Product 4 description',
      image_url: 'https://via.placeholder.com/158',
      price: 1495,
      id: uuidv4(),
    },
    {
      name: 'Product 5',
      description: 'Product 5 description',
      image_url: 'https://via.placeholder.com/158',
      price: 7575,
      id: uuidv4(),
    },
    {
      name: 'Product 6',
      description: 'Product 6 description',
      image_url: 'https://via.placeholder.com/158',
      price: 12025,
      id: uuidv4(),
    },
    {
      name: 'Product 7',
      description: 'Product 7 description',
      image_url: 'https://via.placeholder.com/158',
      price: 19999,
      id: uuidv4(),
    },
    {
      name: 'Product 8',
      description: 'Product 8 description',
      image_url: 'https://via.placeholder.com/158',
      price: 50,
      id: uuidv4(),
    },
    {
      name: 'Product 9',
      description: 'Product 9 description',
      image_url: 'https://via.placeholder.com/158',
      price: 1358,
      id: uuidv4(),
    },
    {
      name: 'Product 10',
      description: 'Product 10 description',
      image_url: 'https://via.placeholder.com/158',
      price: 29999,
      id: uuidv4(),
    },
  ]);

  await app.close();
}
bootstrap();
