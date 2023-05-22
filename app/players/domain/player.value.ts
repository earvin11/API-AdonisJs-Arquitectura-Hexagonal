import { GenerateId } from 'App/shared/helpers/generate-id';
import { PlayerEntity } from './player.entity';


export class Player implements PlayerEntity {
    public name: string;
    public lastName: string;
    public age: number;
    public uuid: string;

    constructor( player: PlayerEntity ) {
        const { uuid } = new GenerateId();
        this.name = player.name;
        this.lastName = player.lastName;
        this.age = player.age;
        this.uuid = uuid;
    };
    
};