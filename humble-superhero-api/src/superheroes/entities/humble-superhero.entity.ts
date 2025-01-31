import { SuperheroType, Superpower } from '../enum';
import { Superhero } from './superhero.entity';

export class HumbleSuperhero extends Superhero {
  private readonly humilityScore: number; // 1-10

  constructor(
    id: number,
    name: string,
    type: SuperheroType,
    superpower: Superpower,
    humilityScore: number,
  ) {
    super(id, name, type, superpower);
    this.humilityScore = humilityScore;
  }

  getHumilityScore(): number {
    return this.humilityScore;
  }
}
