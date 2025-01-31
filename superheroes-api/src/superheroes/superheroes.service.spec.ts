import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from './superheroes.service';
import { BadRequestException } from '@nestjs/common';
import { SuperheroType, Superpower } from './enum';
import { HumbleSuperhero } from './entities';
import { CreateSuperheroDto } from './dto';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroesService],
    }).compile();

    service = module.get<SuperheroesService>(SuperheroesService);
    service['superheroes'] = [];
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createSuperhero', () => {
    it('should create a humble superhero successfully', () => {
      const dto: CreateSuperheroDto = {
        name: 'Test Hero',
        type: SuperheroType.HUMBLE,
        superpower: Superpower.FLYING,
        humilityScore: 10,
      };

      const result = service.createSuperhero(dto);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(HumbleSuperhero);
      expect(result.getId()).toBe(1);
      expect(result.getName()).toBe(dto.name);
      expect(result.getType()).toBe(dto.type);

      expect(result.getHumilityScore()).toBe(dto.humilityScore);
    });

    it('should throw BadRequestException for invalid superhero type', () => {
      const dto = {
        name: 'Test Hero',
        type: 'INVALID_TYPE' as SuperheroType,
        superpower: Superpower.FLYING,
        humilityScore: 10,
      };

      expect(() => service.createSuperhero(dto)).toThrow(BadRequestException);
    });

    it('should throw BadRequestException for missing humility score', () => {
      const dto = {
        name: 'Test Hero',
        type: SuperheroType.HUMBLE,
        superpower: Superpower.FLYING,
      };

      expect(() => service.createSuperhero(dto)).toThrow(BadRequestException);
    });
  });
});
