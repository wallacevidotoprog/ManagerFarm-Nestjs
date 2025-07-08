import { ActionModification } from "src/Domain/Models/Emun/db.enum";
import { UserEntity } from "src/user/entities/user.entity";
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('historic_modifications')
export class HistoricModificationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.historicModification, { eager: true })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @Column({
    type: 'enum',
    enum: ActionModification,
    default: ActionModification.NONE,
  })
  action: ActionModification;

  @Column({ length: 100 })
  tableName: string;

  @Column({ type: 'json' })
  jsonData: any;
}
// export class HistoricModificationEntity {
//   userId: string;
//   user: UserEntity;
//   action: ActionModification = ActionModification.NONE;
//   tableName: string;
//   jsonData: any;
// }
