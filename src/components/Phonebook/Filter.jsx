import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';

import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleTypeFilter = value => {
    dispatch(setFilter(value.toLowerCase().trim()));
  };

  return (
    <>
      <input
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onInput={e => handleTypeFilter(e.target.value)}
      />
    </>
  );
};

export default Filter;
