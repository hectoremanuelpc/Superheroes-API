import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';
import { SuperheroType, Superpower } from './enum';
import { HumbleSuperhero } from './entities';
import { CreateSuperheroDto } from './dto';
import { Test, TestingModule } from '@nestjs/testing';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const mockService = {
      createSuperhero: jest
        .fn()
        .mockImplementation((dto: CreateSuperheroDto) => {
          return new HumbleSuperhero(
            1, // Simulamos la asignación del ID
            dto.name,
            SuperheroType.HUMBLE,
            dto.superpower,
            dto.humilityScore,
          );
        }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [
        {
          provide: SuperheroesService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  describe('create', () => {
    it('should create a humble superhero successfully', async () => {
      // Arrange
      const createSuperheroDto: CreateSuperheroDto = {
        name: 'Humble Man',
        type: SuperheroType.HUMBLE,
        superpower: Superpower.INVISIBILITY,
        humilityScore: 8,
      };

      const expectedSuperhero = {
        id: 1,
        ...createSuperheroDto,
      };

      jest
        .spyOn(service, 'createSuperhero')
        .mockResolvedValue(expectedSuperhero);

      // Act
      const result = await controller.create(createSuperheroDto);

      // Assert
      expect(service.createSuperhero).toHaveBeenCalledWith(createSuperheroDto);
      expect(result).toBe(expectedSuperhero);
    });
  });
});
