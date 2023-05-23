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

};