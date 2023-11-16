import React from 'react';
import ToggleFilter from './ToggleFilter';

const Filters = ({ styles }) => {
return (
    <div className='flex-row filters'>
      <span className={'groupLabel'}>Group By:</span>
      <ToggleFilter key={'week'} group='week' />
      <ToggleFilter key={'author'} group='author' />
      <ToggleFilter key={'location'} group='location' />
    </div>
  );
};

export default Filters;
