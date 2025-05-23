import { LiteralUnion } from 'antd/es/_util/type';
import { PresetColorType } from 'antd/es/_util/colors';
import { TaskStatus } from '@/types/tasks.types';

const getStatusLabelColor = (
  status: TaskStatus
): LiteralUnion<PresetColorType> | undefined =>
  status === 'done'
    ? 'green'
    : status === 'in_progress'
    ? 'magenta'
    : undefined;

export default getStatusLabelColor;
