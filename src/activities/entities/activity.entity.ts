import { EntityDefault } from 'src/Domain/Models/entity-default.entity';
import { PropertyActivitiesEntity } from 'src/property/entities/property-activities.entity';
import { Column, Entity, OneToMany } from 'typeorm';
@Entity('activities')
export class ActivityEntity extends EntityDefault {
  @Column({ length: 100 })
  name: string;

  @Column({ nullable: true, type: 'text' })
  description?: string;

  @OneToMany(() => PropertyActivitiesEntity, (propertyActivity) => propertyActivity.activities)
  propertyActivities?: PropertyActivitiesEntity[];
}
// export class ActivityEntity extends EntityDefault {
//   name: string;
//   description?: string;
//   propertyActivities?: PropertyActivitiesEntity[];
// }
