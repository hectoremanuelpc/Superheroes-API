import { IsNumber, Max, Min } from 'class-validator';
import { CreateSuperheroDto } from './create-superhero.dto';
import { SuperheroType } from '../enum';

export class CreateHumbleSuperheroDto extends CreateSuperheroDto {
  @IsNumber()
  @Min(1)
  @Max(10)
  humilityScore: number;

  type = SuperheroType.HUMBLE; // Ensure type is always HUMBLE
}
