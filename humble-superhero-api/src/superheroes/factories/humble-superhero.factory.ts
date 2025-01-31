import { Injectable } from '@nestjs/common';
import { SuperheroFactoryInterface } from './superhero.factory.interface';
import { HumbleSuperhero, Superhero } from '../entities';
import { SuperheroType } from '../enum';
import { CreateSuperheroDto } from '../dto';

@Injectable()
export class HumbleSuperheroFactory
  implements SuperheroFactoryInterface<HumbleSuperhero>
{
  createSuperhero(
    superheroe: CreateSuperheroDto & { id: number },
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
