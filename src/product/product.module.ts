import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { ProductController } from 'src/product/product.controller';
import { ProductService } from 'src/product/product.service';

@Module({
  imports: [PassportModule, TypeOrmModule.forFeature([Product]), PrismaModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
