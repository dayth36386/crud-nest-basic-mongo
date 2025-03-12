import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly name?: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly description?: string;
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly price?: number;
}
