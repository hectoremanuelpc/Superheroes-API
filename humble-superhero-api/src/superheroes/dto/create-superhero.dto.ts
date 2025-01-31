import { IsEnum, IsNumber, IsString, Max, Min } from 'class-validator';
import { SuperheroType, Superpower } from '../enum';

export class CreateSuperheroDto {
  @IsString()
  name: string;

  @IsEnum(Superpower, {
    message: `Superpower must be one of the following values: ${Object.values(Superpower).join(', ')}`,
  })
  superpower: Superpower;

  @IsEnum(SuperheroType, {
    message: `Type must be one of the following values: ${Object.values(SuperheroType).join(', ')}`,
  })
  type: SuperheroType;
}
