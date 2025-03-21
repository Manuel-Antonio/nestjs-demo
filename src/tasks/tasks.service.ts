import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks: any = [];
  getTasks() {
    return this.tasks;
  }
  getTask(id: number) {
    const taskFind = this.tasks.find((task) => task.id == id);
    if (!taskFind) {
      return new NotFoundException(`Task con id : ${id} no encontrrado`);
    }
    return taskFind ?? -1;
  }
  createTasks(task: CreateTaskDto) {
    console.log(task);
    this.tasks = [
      ...this.tasks,
      {
        ...task,
        id: this.tasks.length + 1,
      },
    ];
    return 'Se ha creado una nueva tarea';
  }
  updateTasks(task : UpdateTaskDto, id:number) {
    
    return 'Se actualizo una nueva  tarea';
  }
  deleteTasks() {
    return 'Se eliminó una nueva tarea';
  }
  patchTasks() {
    return 'Se actualizo parcialmente la tarea';
  }
}
