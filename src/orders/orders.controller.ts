import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import {
  // ApiBadGatewayResponse,
  // ApiCreatedResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create order' })
  // @ApiBadGatewayResponse({
  //   description: 'Bad Gateway',
  // })
  // @ApiCreatedResponse({
  //   description: 'The order has been successfully created.',
  // })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find order by ID' })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }
}
