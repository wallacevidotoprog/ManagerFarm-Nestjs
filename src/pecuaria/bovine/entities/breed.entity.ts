import { BaseEntity, Column, Entity, OneToMany } from 'typeorm';
import { BovineEntity } from './bovine.entity';
import { EntityDefault } from 'src/Domain/Models/entity-default.entity';

@Entity('bredd_bovine')
export class BreedEntity extends EntityDefault {
  @Column()
  name: string;

  @OneToMany(() => BovineEntity, (bovine) => bovine.breed)
  bovines: BovineEntity[];
}
