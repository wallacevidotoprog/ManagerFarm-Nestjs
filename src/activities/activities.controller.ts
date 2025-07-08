import { Controller } from '@nestjs/common';
import { BaseController } from 'src/Domain/Repository/controller-default.repository';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto, UpdateActivityDto } from './dto/activity.dto';

@Controller('activities')
export class ActivitiesController extends BaseController<CreateActivityDto, UpdateActivityDto, any> {
  constructor(private readonly activitiesService: ActivitiesService) {
    super(activitiesService);
  }  
}
