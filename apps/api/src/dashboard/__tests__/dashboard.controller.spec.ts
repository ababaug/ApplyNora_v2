import { Test, TestingModule } from '@nestjs/testing';
import { DashboardController } from '../dashboard.controller.js';
import { PrismaService } from '../../prisma/prisma.service.js';

describe('DashboardController', () => {
  let controller: DashboardController;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashboardController],
      providers: [
        {
          provide: PrismaService,
          useValue: {
            candidateProfile: {
              findUnique: vi.fn().mockResolvedValue({}),
            },
          },
        },
      ],
    }).compile();

    controller = module.get<DashboardController>(DashboardController);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return overview data', async () => {
    const result = await controller.getOverview({ user: { id: '1' } });
    expect(result.profileCompletion).toBe(100);
    expect(result.jobRadarMatches).toBe(0);
    expect(prisma.candidateProfile.findUnique).toHaveBeenCalledWith({ where: { userId: '1' } });
  });
});