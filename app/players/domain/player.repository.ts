import { PlayerEntity } from './player.entity';

export interface PlayerRepository {
    createPlayer( player: PlayerEntity ): Promise<PlayerEntity>;
    getPlayerByUuid( uuid: string ): Promise<PlayerEntity | null>;
    getPlayerByName( name: string ): Promise<PlayerEntity | null>;
    deletePlayer( uuid: string ): Promise<PlayerEntity | null>;
};