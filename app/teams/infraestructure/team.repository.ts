import { TeamEntity } from '../domain/team.entity';
import { TeamRepository } from '../domain/team.repository';
import TeamModel from './team.model';


export class TeamMongoRepository implements TeamRepository {
    public async createTeam(team: TeamEntity): Promise<TeamEntity> {
        const teamCreated = await TeamModel.create( team );
        return teamCreated;
    }
    public async getAllTeams(): Promise<[] | TeamEntity[]> {
        const teams = await TeamModel.find();
        return teams;
    }
    getTeamByLoaction(location: string): Promise<TeamEntity | null> {
        throw new Error('Method not implemented.');
    }
    public async getTeamByUuid(uuid: string): Promise<TeamEntity | null> {
        const team = await TeamModel.findOne({ uuid });
        return team;
    }
    public async deleteTeam(uuid: string): Promise<TeamEntity | null> {
        const team = await TeamModel.findOneAndDelete({ uuid });
        return team;
    }

};