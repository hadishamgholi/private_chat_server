
import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    firstName: string = '';

    @Column()
    lastName?: string = '';

    @Column()
    nationalId: string = '';
}



