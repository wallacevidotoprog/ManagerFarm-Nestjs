import { EntityDefault } from 'src/Domain/Models/entity-default.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { DepartamentEntity } from './department.entity';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';

@Entity('functions')
export class FunctionsEntity extends EntityDefault {
  @Column({ length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column()
  departamentId: string;

  @ManyToOne(() => DepartamentEntity, (departament) => departament.functionsList)
  @JoinColumn({ name: 'departamentId' })
  departament: DepartamentEntity;

   @OneToMany(() => EmployeeEntity, (emp) => emp.function)
  employees: EmployeeEntity[];
}

