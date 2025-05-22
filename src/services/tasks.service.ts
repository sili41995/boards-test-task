import { ITask, NewTask, Tasks } from '@/types/tasks.types';
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

  async add(data: NewTask): Promise<ITask> {
    const response = await this.post<ITask, NewTask>({
      url: 'tasks',
      data,
    });

    return response.data;
  }
}

const tasksService = new TasksService();

export default tasksService;
