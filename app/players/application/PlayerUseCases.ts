import { PlayerEntity } from '../domain/player.entity';
import { PlayerRepository } from '../domain/player.repository';
import { Player } from '../domain/player.value';


export class PlayerUseCases {

    constructor(
        private readonly playerRepository: PlayerRepository
    ) {}

    public async createPlayer (player: PlayerEntity) {
        const newPlayer = new Player(player);
        const playerCreated = await this.playerRepository.createPlayer(newPlayer);

        return playerCreated;
    }

};