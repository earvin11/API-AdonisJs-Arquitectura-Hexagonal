import { PlayerRepository } from '../domain/player.repository';
import { PlayerEntity } from '../domain/player.entity';
import PlayerModel from './player.model';


export class PlayerMongoRepository implements PlayerRepository {

    public createPlayer = async( player: PlayerEntity ): Promise<PlayerEntity> => {
        const playerCreated = await PlayerModel.create( player );
        return playerCreated;
    }

    public getPlayerByUuid = async( uuid: string ): Promise<PlayerEntity | null> => {
        const player = await PlayerModel.findOne({ uuid });
        if(!player) return null;

        return player;
    }

    public getPlayerByName = async(name: string): Promise<PlayerEntity | null> => {
        const player = await PlayerModel.findOne({ name }).exec();
        if(!player) return null;

        return player;
    }

   public deletePlayer = async (uuid: string): Promise<PlayerEntity | null> => {
        const player = await PlayerModel.findOneAndDelete({ uuid });
        if(!player) return null;

        return player;
   } 

};