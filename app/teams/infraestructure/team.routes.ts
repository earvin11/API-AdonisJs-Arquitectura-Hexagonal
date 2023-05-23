import Route from '@ioc:Adonis/Core/Route';
import { teamController } from './dependencies';


const TeamRoutes = () => {
    Route.post('/create', teamController.createTeam).middleware(['createTeam']);
    Route.get('/all', teamController.getAllTeams);
    Route.get('/:uuid', teamController.getTeamByUuid);
};


export default TeamRoutes;