import { useForm } from '../hooks/useForm';
import { FC } from 'react';
import { stringify } from 'querystring';

interface Props {
  onChangeFilter: (data: { title: string; criteria: string }) => void;
}

export const TodoFilter: FC<Props> = ({ onChangeFilter }) => {
  const { fields: filterBy, handleChange } = useForm<{
    title: string;
    criteria: string;
  }>(
    {
      title: '',
      criteria: '',
    },
    onChangeFilter
  );

  const { title, criteria } = filterBy;
  return (
    <div className='todo-filter-wrapper'>
      <div className='todo-filter-input'>
        <input
          type='text'
          placeholder='Search'
          onChange={handleChange}
          value={title}
          name='title'
        />
      </div>
      <div className='todo-filter-select-wrapper'>
        <select
          className='todo-filter-select'
          placeholder='All'
          onChange={handleChange}
          value={criteria}
          name='criteria'>
          <option value=''>All</option>
          <option value='name-a-to-z'>Todo: A to Z</option>
          <option value='name-z-to-a'>Todo: Z to A</option>
          <option value='created-new-to-old'>Created: Old to New</option>
          <option value='created-old-to-new'>Created: New to Old</option>
        </select>
      </div>
    </div>
  );
};
