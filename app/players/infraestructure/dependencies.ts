import { PlayerUseCases } from '../application/PlayerUseCases';
import { PlayerController } from './player.controller';
import { PlayerMongoRepository } from './player.repository';


const playerRepository = new PlayerMongoRepository();
export const playerUseCases = new PlayerUseCases(playerRepository);
export const playerController = new PlayerController(playerUseCases);
