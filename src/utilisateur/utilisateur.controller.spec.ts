import { Test, TestingModule } from '@nestjs/testing';
import { UtilisateurController } from './utilisateur.controller';

describe('UtilisateurController', () => {
  let controller: UtilisateurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UtilisateurController],
    }).compile();

    controller = module.get<UtilisateurController>(UtilisateurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
