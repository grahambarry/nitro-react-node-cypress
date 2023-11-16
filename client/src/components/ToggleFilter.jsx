import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGroupBy } from '../actions/action';

const ToggleFilter = ({ group }) => {

  const dispatch = useDispatch();
  const groupBy = useSelector((state) => state.groupBy);

  const handleSetGroupBy = (group) => {
      dispatch(setGroupBy(group));
  }

  const isActive = group === groupBy;

  return (
    <div 
      className={`toggleFilter ${isActive && 'active'}`} 
      onClick={() => handleSetGroupBy(group)}>
      {group}
    </div>
  );
};

export default ToggleFilter;
