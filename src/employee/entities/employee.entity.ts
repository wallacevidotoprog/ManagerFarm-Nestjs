import { AddressEntity } from 'src/address/entities/address.entity';
import { FunctionsEntity } from 'src/departament/entities/functions .entity';
import { CategoryCnh, Sex } from 'src/Domain/Models/Emun/db.enum';
import { EntityDefault } from 'src/Domain/Models/entity-default.entity';
import { PropertyEntity } from 'src/property/entities/property.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity('employees')
export class EmployeeEntity extends EntityDefault {
  @Column({ length: 100 })
  name: string;

  @Column({ length: 14 })
  cpf: string;

  @Column({ length: 20, nullable: true })
  rg?: string;

  @Column({ length: 20, nullable: true })
  cnh?: string;

  @Column({
    type: 'enum',
    enum: CategoryCnh,
    array:true,
    nullable: true,
  })
  category_cnh?: CategoryCnh[];

  @Column({ type: 'date', nullable: true })
  maturity_cnh?: Date;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 20, nullable: true })
  phone?: string;

  @Column({ type: 'date' })
  birth: Date;

  @Column({ nullable: true })
  addressId: string;

  @ManyToOne(() => AddressEntity, { cascade: true, eager: true ,nullable: true})
  @JoinColumn({ name: 'addressId' })
  address?: AddressEntity;

  @Column({ type: 'date' })
  admission: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  salary: number;

  @Column({ length: 10, nullable: true })
  cbo?: string;

  @Column({ length: 20, nullable: true })
  pis?: string;

  @Column({
    type: 'enum',
    enum: Sex,
    nullable: true,
    default: Sex.OUTROS,
  })
  sex?: Sex;

  @Column({ type: 'date', nullable: true })
  demission?: Date;

  @Column({ nullable: true })
  propertyId?: string;

  @ManyToOne(() => PropertyEntity, { cascade: true, nullable: true, eager: true })
  @JoinColumn({ name: 'propertyId' })
  property?: PropertyEntity;

  @Column({ default: true })
  active: boolean;

  @ManyToOne(() => FunctionsEntity, (func) => func.employees)
  @JoinColumn({ name: 'functionId' })
  function: FunctionsEntity;

  @OneToOne(() => UserEntity, (user) => user.employee)
  user?: UserEntity;
}
