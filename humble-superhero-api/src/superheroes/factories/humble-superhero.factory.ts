import { Injectable } from '@nestjs/common';
import { SuperheroFactoryInterface } from './superhero.factory.interface';
import { HumbleSuperhero, Superhero } from '../entities';
import { CreateHumbleSuperheroDto } from '../dto';
import { SuperheroType } from '../enum';

@Injectable()
export class HumbleSuperheroFactory
  implements SuperheroFactoryInterface<HumbleSuperhero>
{
  createSuperhero(
    superheroe: CreateHumbleSuperheroDto & { id: number },
  ): HumbleSuperhero {
    return new HumbleSuperhero(
      superheroe.id,
      superheroe.name,
      SuperheroType.HUMBLE,
      superheroe.superpower,
      superheroe.humilityScore,
    );
  }
}
