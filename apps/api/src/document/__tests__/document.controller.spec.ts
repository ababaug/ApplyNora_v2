import { Test, TestingModule } from '@nestjs/testing';
import { DocumentController } from '../document.controller.js';
import { DocumentService } from '../document.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';

describe('DocumentController', () => {
  let controller: DocumentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentController],
      providers: [
        {
          provide: DocumentService,
          useValue: {
            list: vi.fn().mockResolvedValue([{ id: '1', name: 'resume.pdf' }]),
          },
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

    controller = module.get<DocumentController>(DocumentController);
  });

  it('should list documents', async () => {
    const result = await controller.list({ user: { id: 'u1' } });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('resume.pdf');
  });
});