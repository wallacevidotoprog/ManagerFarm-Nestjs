import { BaseEntity, Column, Entity, ManyToOne } from 'typeorm';
import { BovineEntity } from './bovine.entity';
import { EntityDefault } from 'src/Domain/Models/entity-default.entity';

@Entity('vaccine_bovine')
export class VaccineEntity extends EntityDefault {
  @ManyToOne(() => BovineEntity, (bovine) => bovine.vaccines)
  bovine: BovineEntity;

  @Column({ type: 'date' })
  vaccinationDate: Date;

  @Column()
  dose: string;

  @Column({ type: 'date' })
  manufactureDate: Date;

  @Column({ type: 'date' })
  expirationDate: Date;

  @Column()
  certificateNumber: string;

  @Column()
  batch: string;
}
