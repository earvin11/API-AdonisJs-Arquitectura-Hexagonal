import { PlayerRepository } from '../domain/player.repository';
import { PlayerEntity } from '../domain/player.entity';
import PlayerModel from './player.model';


export class PlayerMongoRepository implements PlayerRepository {

    public async createPlayer ( player: PlayerEntity ): Promise<PlayerEntity> {
        const playerCreated = await PlayerModel.create( player );
        return playerCreated;
    }

    public async getAllPlayers(): Promise<PlayerEntity[] | []> {
        const players = await PlayerModel.find().exec();
        return players;
    }

    public async getPlayerByUuid ( uuid: string ): Promise<PlayerEntity | null> {
        const player = await PlayerModel.findOne({ uuid });
        if(!player) return null;

        return player;
    }

    public async getPlayerByName (name: string): Promise<PlayerEntity | null> {
        const player = await PlayerModel.findOne({ name }).exec();
        if(!player) return null;

        return player;
    }

   public async deletePlayer  (uuid: string): Promise<PlayerEntity | null> {
        const player = await PlayerModel.findOneAndDelete({ uuid });
        if(!player) return null;

        return player;
   } 

};