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

            response.ok({ message: 'Player creado', player: playerCreated });
        } catch (error) {
            console.log('ERROR CREATE PLAYER ->', error)
            response.internalServerError({ error: 'No se pudo crear el jugador' });
        }
    }

    public getAllPlayers = async({ response }: HttpContext) => {
        try {
            const players = await this.playerUseCases.getAllPlayers();

            response.ok({ message: 'Players obtaineds', players });
        } catch (error) {
            console.log('ERROR GET ALL PLAYERS -> ', error);
            response.internalServerError({ error: 'ERROR ALL PLAYERS' });
        }
    }

    public getPlayerByUuid = async({ request, response }: HttpContext) => {
        const { uuid } = request.params();

        try {
            const player = await this.playerUseCases.getPlayerByUuid(uuid);
            
            if(!player) return response.notFound({ error: 'Player not found' });

            response.ok({ message: 'Player obtained', player });
        } catch (error) {
            console.log('ERROR GET PLAYER BY UUID -> ', error);
            response.internalServerError({ error: 'ERROR PLAYER BY UUID' });   
        }
    }

};