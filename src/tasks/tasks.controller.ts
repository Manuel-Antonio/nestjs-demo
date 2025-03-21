import {Controller, Get, Post, Put, Delete, Patch, Body, Query, Param} from "@nestjs/common"
import {TasksService} from "./tasks.service"
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('tasks')
@ApiTags('Tasks')
export class TasksController{
    tasksService : TasksService;
    constructor(tasksService : TasksService){
        this.tasksService = tasksService
    }
    @Get()
    @ApiOperation({summary: "Obtiene todas las tareas"})
    @ApiResponse({status: 200, description: "Retorna todas las tareas"})
    @ApiResponse({status: 403, description: "Prohibido"})
    getAllTasks(@Query() query : any) {
        console.log(query);
        return  this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id : string) {
        return  this.tasksService.getTask(parseInt(id));
    }


    @Post()
    createTasks(@Body() task : CreateTaskDto) {

        return this.tasksService.createTasks(task);
    }

    @Put('/:id')
    updateTasks(@Body() task : UpdateTaskDto, @Param('id') id : string) {
        return this.tasksService.updateTasks(task, parseInt(id));
    }

    @Delete()
    deleteTasks() {
        return this.tasksService.deleteTasks();
    }

    @Patch()
    updatePatchTasks() {
        return this.tasksService.patchTasks();
    }
}