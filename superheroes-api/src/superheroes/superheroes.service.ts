import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { HumbleSuperhero, Superhero } from './entities';
import { SuperheroType } from './enum';
import { HumbleSuperheroFactory } from './factories/humble-superhero.factory';
import { SuperheroFactoryInterface } from './factories/superhero.factory.interface';

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];

  private readonly superheroFactories: Record<
    SuperheroType,
    SuperheroFactoryInterface<Superhero>
  > = {
    [SuperheroType.HUMBLE]: new HumbleSuperheroFactory(),
    // Add more superhero factories here
  };

  createSuperhero(createSuperheroDto: CreateSuperheroDto) {
    const factory = this.getFactory(createSuperheroDto.type);

    const superhero = this.createAndValidateSuperhero(
      createSuperheroDto,
      factory,
    );

    this.saveSuperhero(superhero);
    return superhero;
  }

  findAll(type?: string) {
    if (!type) {
      return this.superheroes.length > 0
        ? this.superheroes
        : 'No superheroes found.';
    }

    switch (type) {
      case SuperheroType.HUMBLE:
        return this.getHumbleSuperheroes();

      // Add more superhero types here

      default:
        throw new BadRequestException(`Invalid superhero type: ${type}`);
    }
  }

  private getHumbleSuperheroes() {
    const humbleSuperheroes = this.superheroes
      .filter((superhero) => superhero.getType() === SuperheroType.HUMBLE)
      .map((superhero) => superhero as HumbleSuperhero)
      .sort((a, b) => b.getHumilityScore() - a.getHumilityScore());

    return humbleSuperheroes.length > 0
      ? humbleSuperheroes
      : 'No humble superheroes found.';
  }

  private getFactory(type: SuperheroType) {
    const factory = this.superheroFactories[type];
    if (!factory)
      throw new BadRequestException(`Invalid superhero type: ${type}`);
    return factory;
  }

  private createAndValidateSuperhero(dto: CreateSuperheroDto, factory: any) {
    switch (dto.type) {
      case SuperheroType.HUMBLE:
        this.isHumbleSuperheroDto(dto);
        return factory.createSuperhero({
          id: this.generateId(),
          ...dto,
        });

      // Add more superhero types here
      default:
        throw new BadRequestException(`Invalid superhero type: ${dto.type}`);
    }
  }

  private isHumbleSuperheroDto(dto: CreateSuperheroDto) {
    if (!('humilityScore' in dto))
      throw new BadRequestException(
        'Missing required fields for Humble superhero',
      );
  }

  private generateId(): number {
    return this.superheroes.length + 1;
  }

  private saveSuperhero(superhero: Superhero): void {
    this.superheroes.push(superhero);
  }
}
