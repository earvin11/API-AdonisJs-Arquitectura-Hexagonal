import { TeamEntity } from '../domain/team.entity';
import { TeamRepository } from '../domain/team.repository';
import { Team } from '../domain/team.value';


export class TeamUseCases {

    constructor(
        private readonly teamRepository: TeamRepository
    ) {}

    public createTeam = async( team: TeamEntity ) => {
        const newTeam = new Team( team );

        const teamCreated = await this.teamRepository.createTeam(newTeam);
        return teamCreated;
    }

    public getAllTeams = async() => {
        const teams = await this.teamRepository.getAllTeams();
        return teams;
    }

    public getTeamByUuid = async(uuid: string) => {
        const team = await this.teamRepository.getTeamByUuid(uuid);
        return team;
    }

};