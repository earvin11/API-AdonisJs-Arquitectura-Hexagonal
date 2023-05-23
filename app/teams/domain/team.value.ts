import { GenerateId } from 'App/shared/helpers/generate-id';
import { TeamEntity } from './team.entity';


export class Team implements TeamEntity {
    public name: string;
    public championships: number;
    public conference: string;
    public uuid?: string;

    constructor( team: TeamEntity ) {
        const { uuid } = new GenerateId();
        this.name = team.name;
        this.championships = team.championships;
        this.conference = team.conference;
        this.uuid = uuid;
    };
};