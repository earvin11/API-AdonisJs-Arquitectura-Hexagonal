import Route from '@ioc:Adonis/Core/Route';
import { teamController } from './dependencies';


const TeamRoutes = () => {
    Route.post('/create', teamController.createTeam).middleware(['createTeam']);
};


export default TeamRoutes;