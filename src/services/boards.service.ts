import { Boards, IBoard, NewBoard } from '@/types/boards.types';
import HttpService from './http.service';

class BoardsService extends HttpService {
  constructor() {
    super();
  }

  async getAll(): Promise<Boards> {
    const response = await this.get<Boards>({
      url: 'boards',
    });

    return response.data;
  }

  async getById(id: number): Promise<IBoard> {
    const response = await this.get<IBoard>({
      url: `boards/${id}`,
    });

    return response.data;
  }

  async add(data: NewBoard): Promise<IBoard> {
    const response = await this.post<IBoard, NewBoard>({
      url: 'boards',
      data,
    });

    return response.data;
  }
}

const boardsService = new BoardsService();

export default boardsService;
