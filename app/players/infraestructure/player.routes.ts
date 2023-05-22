import Route from '@ioc:Adonis/Core/Route';
import { playerController } from './dependencies';


const PlayerRoutes = () => {
    Route.post('/create', playerController.createPlayer).middleware(['createPlayer']);
};


export default PlayerRoutes;