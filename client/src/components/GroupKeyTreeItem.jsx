// src/components/TreeComponent.js

import React, { useState } from 'react';
import TreeItem from './TreeItem';
import { useSelector } from 'react-redux';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EventIcon from '@mui/icons-material/Event';

function GroupKeyTreeItem({ groupKey, entries }) {

  const groupBy = useSelector((state) => state.groupBy);

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const SwitchIcon = () => {
    switch (groupBy) {
      case 'author':
        return <AccountCircleIcon />;
      case 'week':
        return <EventIcon />;
      case 'location':
        return <FmdGoodIcon />;
      default:
        return null;
    }
  };

  return (
    <li>
      <div className={isActive ? 'active tree-item' : 'tree-item'}>
        <div
          className='tree-button'
          onClick={toggleActive}>
          {isActive 
            ? <> <ArrowDropDownIcon /> <SwitchIcon /></> 
            : <> <ArrowRightIcon /> <SwitchIcon /></> }
            {groupKey}
        </div>
        {Array.isArray(entries) && entries.length > 0 && (
          <ul>
            {entries.map(item => (
              <TreeItem
                key={item.id}
                item={item}
                groupBy={groupBy}
              />
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

export default GroupKeyTreeItem;
