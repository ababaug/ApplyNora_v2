import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller.js';
import { AuthService } from '../auth.service.js';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: vi.fn().mockResolvedValue({ sessionToken: 'abc', user: { id: '1', email: 'test@test.com', role: 'USER' } }),
            register: vi.fn().mockResolvedValue({ message: 'Registration successful', userId: '1' }),
            logout: vi.fn().mockResolvedValue({ message: 'Logged out' }),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login', () => {
    it('should set cookie and return user', async () => {
      const mockResponse = {
        cookie: vi.fn(),
      };

      const result = await controller.login({ email: 'test@test.com', password: 'password' }, mockResponse as any);

      expect(authService.login).toHaveBeenCalledWith({ email: 'test@test.com', password: 'password' });
      expect(mockResponse.cookie).toHaveBeenCalledWith('session_token', 'abc', expect.any(Object));
      expect(result).toEqual({ user: { id: '1', email: 'test@test.com', role: 'USER' } });
    });
  });
});