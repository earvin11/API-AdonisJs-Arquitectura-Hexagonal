import { HttpContext } from '@adonisjs/core/build/standalone';
import { TeamUseCases } from '../application/TeamUseCases';
import { TeamEntity } from '../domain/team.entity';


export class TeamController {

    constructor(
        private teamUseCases: TeamUseCases
    ) {}

    public createTeam = async({ request, response }: HttpContext) => {
        const { name, championships, conference } = request.body();

        const newTeam: TeamEntity = {
            name,
            championships,
            conference
        };

        try {
            const teamCreated = await this.teamUseCases.createTeam(newTeam);

            response.ok({
                message: 'Team',
                team: teamCreated
            });
        } catch (error) {
            console.log('ERROR CREATE TEAM -> ', error)
            response.internalServerError({ error: 'FAILED CREATED TEAM' });
        }
    }

    public getAllTeams = async({ response }: HttpContext) => {
        try {
            const teams = await this.teamUseCases.getAllTeams();
            response.ok({ message: 'Teams obtained', teams });
        } catch (error) {
            console.log('ERROR GET ALL TEAMS -> ', error);
            response.internalServerError({ error: 'FALIED GET ALL TEAMS' });
        }
    }

    public getTeamByUuid = async({ request, response }: HttpContext) => {
        const { uuid } = request.params();
        try {
            const team = await this.teamUseCases.getTeamByUuid(uuid);
            if(!team) return response.notFound({ error: 'Team not found' });

            response.ok({ message: 'Team obtained', team });
        } catch (error) {
            console.log('ERROR GET TEAM BY UUID -> ', error);
            response.internalServerError({ error: 'FALIED GET TEAM' });
        }
    }

};