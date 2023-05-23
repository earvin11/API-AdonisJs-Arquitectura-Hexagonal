import { TeamUseCases } from '../application/TeamUseCases';
import { TeamController } from './team.controller';
import { TeamMongoRepository } from './team.repository';

const teamRepository = new TeamMongoRepository();
export const teamUseCases = new TeamUseCases(teamRepository);
export const teamController = new TeamController(teamUseCases);