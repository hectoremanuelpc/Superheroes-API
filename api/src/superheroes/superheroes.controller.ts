import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

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
  findAll(@Query('type') type: string) {
    return this.superheroesService.findAll(type);
  }
}
