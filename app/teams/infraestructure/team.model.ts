import { Schema, model } from 'mongoose';
import { TeamEntity } from '../domain/team.entity';

const TeamSchema = new Schema<TeamEntity>({
    name: String,
    championships: Number,
    conference: String,
    uuid: String,
  },
  {
    versionKey: false,
    timestamps: true,
});

const TeamModel = model('Team', TeamSchema);

export default TeamModel;