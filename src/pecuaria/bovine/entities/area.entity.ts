import { AreaType } from 'src/Domain/Models/Emun/db.enum';
import { BaseEntity, Column, Entity, OneToMany } from 'typeorm';
import { BovineEntity } from './bovine.entity';
import { EntityDefault } from 'src/Domain/Models/entity-default.entity';

@Entity('area_bovine')
export class AreaEntity extends EntityDefault {
  @Column()
  name: string;

  @Column({ type: 'enum', enum: AreaType, default: AreaType.NONE })
  type: AreaType;

  @OneToMany(() => BovineEntity, (bovine) => bovine.area)
  bovines: BovineEntity[];
}
