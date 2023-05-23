import Route from '@ioc:Adonis/Core/Route';
import { playerController } from './dependencies';


const PlayerRoutes = () => {
    Route.post('/create', playerController.createPlayer).middleware(['createPlayer']);
    Route.get('/all', playerController.getAllPlayers);
    Route.get('/:uuid', playerController.getPlayerByUuid);
};


export default PlayerRoutes;