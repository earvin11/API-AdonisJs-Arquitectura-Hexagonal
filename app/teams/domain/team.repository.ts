import { TeamEntity } from './team.entity';


export interface TeamRepository {
    createTeam( team: TeamEntity ): Promise<TeamEntity>;
    getAllTeams(): Promise<TeamEntity[] | []>;
    getTeamByLoaction( location: string ): Promise<TeamEntity | null>;
    getTeamByUuid( uuid: string ): Promise<TeamEntity | null>;
    deleteTeam( uuid: string ): Promise<TeamEntity | null>;
};