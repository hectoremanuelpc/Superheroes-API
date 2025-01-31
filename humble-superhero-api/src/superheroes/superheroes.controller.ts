import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateHumbleSuperheroDto, CreateSuperheroDto } from './dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  async create(
    @Body() createSuperheroDto: CreateSuperheroDto | CreateHumbleSuperheroDto,
  ) {
    const superhero =
      await this.superheroesService.createSuperhero(createSuperheroDto);
    return superhero;
  }

  @Get()
  findAll() {
    return this.superheroesService.findAll();
  }
}
