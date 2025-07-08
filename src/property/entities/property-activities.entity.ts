import { ActivityEntity } from 'src/activities/entities/activity.entity';
import { EntityDefault } from 'src/Domain/Models/entity-default.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { PropertyEntity } from './property.entity';

@Entity('property_activities')
export class PropertyActivitiesEntity extends EntityDefault {
  @Column()
  propertyId: string;

  @ManyToOne(() => PropertyEntity, (property) => property.propertyActivities)
  @JoinColumn({ name: 'propertyId' })
  property: PropertyEntity;

  @Column()
  activitiesId: string;

  @ManyToOne(() => ActivityEntity, (activity) => activity.propertyActivities)
  @JoinColumn({ name: 'activitiesId' })
  activities: ActivityEntity;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.propertyActivities)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}

