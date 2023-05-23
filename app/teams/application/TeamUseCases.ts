import { TeamEntity } from '../domain/team.entity';
import { TeamRepository } from '../domain/team.repository';
import { Team } from '../domain/team.value';


export class TeamUseCases {

    constructor(
        private readonly teamRepository: TeamRepository
    ) {}

    public async createTeam( team: TeamEntity ) {
        const newTeam = new Team( team );

        const teamCreated = await this.teamRepository.createTeam(newTeam);
        return teamCreated;
    }

};