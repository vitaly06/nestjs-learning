import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private taskts = [
    {
      id: 1,
      title: 'Learn Nest Js',
      isComplited: false,
    },
    {
      id: 2,
      title: 'build API',
      isComplited: true,
    },
  ];

  findAll() {
    return this.taskts;
  }

  findById(id: number) {
    const task = this.taskts.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  createTask(dto: CreateTaskDto) {
    const { title, description, priority, tags } = { ...dto };
    const newTask = {
      id: this.taskts.length + 1,
      title,
      description,
      isComplited: false,
      priority,
      tags,
    };
    this.taskts.push(newTask);

    return this.taskts;
  }

  updateTask(id: number, dto: UpdateTaskDto) {
    const task = this.findById(id);
    const { title, isComplited } = { ...dto };
    task.title = title;
    task.isComplited = isComplited;
    return task;
  }

  patchTask(id: number, dto: Partial<UpdateTaskDto>) {
    const task = this.findById(id);

    Object.assign(task, dto);
    return task;
  }

  delete(id: number) {
    const task = this.findById(id);

    this.taskts = this.taskts.filter((t) => t.id !== task.id);
    return task;
  }
}
