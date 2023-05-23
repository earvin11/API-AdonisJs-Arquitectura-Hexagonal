import { HttpContext } from '@adonisjs/core/build/standalone';
import { PlayerUseCases } from '../application/PlayerUseCases';
import { PlayerEntity } from '../domain/player.entity';


export class PlayerController {

    constructor(
        private playerUseCases: PlayerUseCases
    ) {}

    public createPlayer = async({ request, response }: HttpContext) => {
        const { 
            name,
            lastName,
            age
        } = request.body();

        const player: PlayerEntity = {
            name,
            lastName,
            age
        };

        try {
            const playerCreated = await this.playerUseCases.createPlayer(player);

            response.ok({
                message: 'Player creado',
                player: playerCreated
            });
        } catch (error) {
            console.log('ERROR CREATE PLAYER ->', error)
            response.internalServerError({ error: 'No se pudo crear el jugador' });
        }
    }

};