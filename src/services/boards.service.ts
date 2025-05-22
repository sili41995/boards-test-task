import { IBoard, NewBoard } from '@/types/boards.types';
import HttpService from './http.service';

class BoardsService extends HttpService {
  constructor() {
    super();
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
