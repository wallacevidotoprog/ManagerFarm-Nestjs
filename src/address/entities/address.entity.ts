import { EntityDefault } from 'src/Domain/Models/entity-default.entity';
import { Column, Entity } from 'typeorm';

@Entity('addresses')
export class AddressEntity extends EntityDefault {
  @Column({ length: 45, nullable: true })
  cep?: string;

  @Column({ length: 100 })
  place: string;

  @Column({ length: 45 })
  number: string;

  @Column({ length: 100, nullable: true })
  complement?: string;

  @Column({ length: 80 })
  neighborhood: string;

  @Column({ length: 80 })
  city: string;

  @Column({ length: 2 })
  uf: string;
}

// export class AddressEntity extends EntityDefault {
//   cep?: string;
//   place: string;
//   number: string;
//   complement?: string;
//   neighborhood: string;
//   city: string;
//   uf: string;
// }
