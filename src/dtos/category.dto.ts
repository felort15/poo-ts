import { IsUrl, IsEnum, IsString, IsOptional } from 'class-validator';
import { Category, AccessType } from "../app/category.model";

export class CreateCategoryDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  name?: string;

  @IsOptional()
  @IsUrl({}, { message: '' })
  image?: string;

  @IsOptional()
  @IsEnum(AccessType, { message: 'Invalid access type' })
  access?: AccessType;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'test';
    dto.image = 'https://www.google.com';
    dto.access = AccessType.public;
    console.log(dto);
  } catch (error) {
    console.log(error);
  }
})();
