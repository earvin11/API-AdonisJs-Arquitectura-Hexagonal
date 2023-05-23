import { PlayerEntity } from '../domain/player.entity';
import { PlayerRepository } from '../domain/player.repository';
import { Player } from '../domain/player.value';


export class PlayerUseCases {

    constructor(
        private readonly playerRepository: PlayerRepository
    ) {}

    public createPlayer = async(player: PlayerEntity) => {
        const newPlayer = new Player(player);
        const playerCreated = await this.playerRepository.createPlayer(newPlayer);

        return playerCreated;
    }

    public getAllPlayers = async() => {
        const players = await this.playerRepository.getAllPlayers();
        return players;
    }

    public getPlayerByUuid = async(uuid: string) => {
        const player = await this.playerRepository.getPlayerByUuid(uuid);
        return player;
    }

};