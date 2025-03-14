import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty()
  readonly name: string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly description: string;
  @IsNumber()
  @ApiProperty()
  readonly price: number;
}
