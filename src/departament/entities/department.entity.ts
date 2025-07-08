import { Departaments } from 'src/Domain/Models/Emun/db.enum';
import { EntityDefault } from 'src/Domain/Models/entity-default.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { FunctionsEntity } from './functions .entity';

@Entity('departaments')
export class DepartamentEntity extends EntityDefault {
  @Column({ length: 100 })
  name: string;

  @Column({
    type: 'enum',
    enum: Departaments,
    default: Departaments.NONE,
  })
  functions: Departaments;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @OneToMany(() => FunctionsEntity, (fn) => fn.departament)
  functionsList: FunctionsEntity[];

}
// export class DepartamentEntity extends EntityDefault {
//   name: string;
//   functions: Departaments = Departaments.NONE;
//   description?: string;

//   functionsList: FunctionsEntity[];
//   departmentFunctions: DepartamentFunctionsEntity[];
// }
