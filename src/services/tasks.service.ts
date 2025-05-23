import {
  ITask,
  NewTask,
  Tasks,
  TaskId,
  IUpdateTaskProps,
  NewTaskWithoutBoardId,
} from '@/types/tasks.types';
import HttpService from './http.service';

class TasksService extends HttpService {
  constructor() {
    super();
  }

  async getAll(): Promise<Tasks> {
    const response = await this.get<Tasks>({
      url: 'tasks',
    });

    return response.data;
  }

  async getById(id: number): Promise<ITask> {
    const response = await this.get<ITask>({
      url: `tasks/${id}`,
    });

    return response.data;
  }

  async add(data: NewTask): Promise<ITask> {
    const response = await this.post<ITask, NewTask>({
      url: 'tasks',
      data,
    });

    return response.data;
  }

  async updateById({ data, id }: IUpdateTaskProps): Promise<ITask> {
    const response = await this.put<ITask, NewTaskWithoutBoardId>({
      url: `tasks/${id}`,
      data,
    });

    return response.data;
  }

  async deleteById(id: number): Promise<TaskId> {
    const response = await this.delete<TaskId>({
      url: `tasks/${id}`,
    });

    return response.data;
  }
}

const tasksService = new TasksService();

export default tasksService;
