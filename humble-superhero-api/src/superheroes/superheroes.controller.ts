import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    const superhero =
      this.superheroesService.createSuperhero(createSuperheroDto);
    return superhero;
  }

  @Get()
  findAll() {
    return this.superheroesService.findAll();
  }
}
