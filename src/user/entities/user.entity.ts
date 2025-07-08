import { AddressEntity } from 'src/address/entities/address.entity';
import { Role } from 'src/Domain/Models/Emun/db.enum';
import { EntityDefault } from 'src/Domain/Models/entity-default.entity';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { HistoricModificationEntity } from 'src/historic-modification/entities/historic-modification.entity';
import { PropertyActivitiesEntity } from 'src/property/entities/property-activities.entity';
import { PropertyEntity } from 'src/property/entities/property.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('users')
export class UserEntity extends EntityDefault {
  @Column({ length: 100 })
  name: string;

  @Column({ unique: true, length: 14 })
  cpf: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phone?: string;

  @Column()
  addressId: string;

  @ManyToOne(() => AddressEntity, { cascade: true,eager: true })
  @JoinColumn({ name: 'addressId' })
  address?: AddressEntity;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.NONE,
  })
  role: Role;

  @Column({ nullable: true })
  employeeId?: string;

  @ManyToOne(() => EmployeeEntity, { cascade: true,nullable: true, eager: true })
  @JoinColumn({ name: 'employeeId' })
  employee?: EmployeeEntity;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => PropertyEntity, (property) => property.owner)
  propertyOwner: PropertyEntity[];

  @OneToMany(() => PropertyActivitiesEntity, (pa) => pa.user)
  propertyActivities: PropertyActivitiesEntity[];

  @OneToMany(() => HistoricModificationEntity, (hist) => hist.user)
  historicModification: HistoricModificationEntity[];
}

// export class UserEntity extends EntityDefault {
//   name: string;
//   cpf: string;
//   email: string;
//   password: string;
//   phone?: string;
//   addressId: string;
//   address?: AddressEntity;
//   role: Role = Role.NONE;
//   employeeId?: string;
//   employee?: EmployeeEntity;
//   active: boolean = true;

//   propertyOwner: PropertyEntity[];
//   propertyActivities: PropertyActivitiesEntity[];
//   historicModification: HistoricModificationEntity[];
// }
