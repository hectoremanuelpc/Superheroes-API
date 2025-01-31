import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';
import { CreateHumbleSuperheroDto } from './dto';
import { SuperheroType, Superpower } from './enum';
import { HumbleSuperhero } from './entities';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const mockService = {
      createSuperhero: jest
        .fn()
        .mockImplementation((dto: CreateHumbleSuperheroDto) => {
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
      const createSuperheroDto: CreateHumbleSuperheroDto = {
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
