import { FC } from 'react';
import { IProps } from './TaskListFilterByStatuses.types';
import { Radio, RadioChangeEvent } from 'antd';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys } from '@/constants';
const TaskListFilterByStatuses: FC<IProps> = ({ statuses }) => {
  const { updateSearchParams, searchParams } = useSetSearchParams();
  const status = searchParams.get(SearchParamsKeys.status) ?? '';

  const onChange = (e: RadioChangeEvent) => {
    updateSearchParams({ value: e.target.value, key: SearchParamsKeys.status });
  };

  return (
    <Radio.Group
      block
      options={statuses}
      defaultValue={status}
      optionType='button'
      buttonStyle='solid'
      onChange={onChange}
    />
  );
};

export default TaskListFilterByStatuses;
