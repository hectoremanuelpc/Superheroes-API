import { SuperheroType, Superpower } from '../enum';

export abstract class Superhero {
  protected constructor(
    protected id: number,
    protected name: string,
    protected type: SuperheroType,
    protected superpower: Superpower,
  ) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getType(): SuperheroType {
    return this.type;
  }

  getSuperpower(): Superpower {
    return this.superpower;
  }
}
