import { Schema, model } from 'mongoose';
import { PlayerEntity } from '../domain/player.entity';

const PlayerSchema = new Schema<PlayerEntity>({
    name: String,
    lastName: String,
    age: Number,
    uuid: String,
  },
  {
    versionKey: false,
    timestamps: true,
});

const PlayerModel = model('player', PlayerSchema);

export default PlayerModel;