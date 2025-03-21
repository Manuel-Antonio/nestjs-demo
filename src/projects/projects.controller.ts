import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('projects')
@ApiTags('Projects')
export class ProjectsController {}
