import { Test, TestingModule } from '@nestjs/testing';
import { CvController } from '../cv.controller.js';
import { CvService } from '../cv.service.js';
import { ExportService } from '../export.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';

describe('CvController', () => {
  let controller: CvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CvController],
      providers: [
        {
          provide: CvService,
          useValue: {
            list: vi.fn().mockResolvedValue([{ id: '1', title: 'My CV' }]),
          },
        },
        {
          provide: ExportService,
          useValue: {},
        },
        {
          provide: PrismaService,
          useValue: {},
        }
      ],
    })
      .overrideGuard('AuthGuard')
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<CvController>(CvController);
  });

  it('should list cvs', async () => {
    const result = await controller.list({ user: { id: 'u1' } });
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('My CV');
  });
});