import { CreateSuperheroDto } from '../dto';
import { HumbleSuperhero, Superhero } from '../entities';

export interface SuperheroFactoryInterface<T extends Superhero> {
  createSuperhero(superheroe: CreateSuperheroDto & { id: number }): T;
}
