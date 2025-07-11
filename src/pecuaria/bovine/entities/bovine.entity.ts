import { BovineModalities, BovinePhasesCut, BovinePhasesMilk, BovineSituation, Sex } from 'src/Domain/Models/Emun/db.enum';
import { PropertyEntity } from 'src/property/entities/property.entity';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { AreaEntity } from './area.entity';
import { BreedEntity } from './breed.entity';
import { VaccineEntity } from './vaccine.entity';
import { EntityDefault } from 'src/Domain/Models/entity-default.entity';

@Entity('bovine')
export class BovineEntity extends EntityDefault {
  @Column()
  name: string;

  @Column()
  tagNumber: string;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column({ type: 'enum', enum: BovineSituation })
  situation: BovineSituation;

  @Column({ type: 'enum', enum: BovineModalities })
  modality: BovineModalities;

  @Column({ type: 'enum', enum: BovinePhasesCut, default: BovinePhasesCut.NONE })
  phaseCut: BovinePhasesCut;

  @Column({ type: 'enum', enum: BovinePhasesMilk, default: BovinePhasesMilk.NONE })
  phaseMilk: BovinePhasesMilk;

  @Column({ type: 'enum', enum: Sex, default: Sex.NONE })
  sex: Sex;

  @ManyToOne(() => BovineEntity, { nullable: true })
  @JoinColumn({ name: 'fatherId' })
  father: BovineEntity;

  @ManyToOne(() => BovineEntity, { nullable: true })
  @JoinColumn({ name: 'motherId' })
  mother: BovineEntity;

  @ManyToOne(() => AreaEntity)
  @JoinColumn({ name: 'areaId' })
  area: AreaEntity;

  @ManyToOne(() => BreedEntity, { nullable: true })
  @JoinColumn({ name: 'breedId' })
  breed: BreedEntity;

  @OneToMany(() => VaccineEntity, (vaccine) => vaccine.bovine, { cascade: true })
  vaccines: VaccineEntity[];

  @OneToMany(() => PropertyEntity, (prop) => prop.bovines, { nullable: true })
  @JoinColumn({ name: 'propertyId' })
  property: PropertyEntity;
}
