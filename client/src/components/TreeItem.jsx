import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import InlineEditableRegion from './InlineEditableRegion';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const TreeItem = ({ item }) => {
  const groupBy = useSelector((state) => state.groupBy);
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };
  const formattedDate = moment.unix(item.time).format('MMM, Do YYYY');
  const showAvatar = groupBy !== 'author';
  
  return (
    <li className={`tree-item ${isActive ? 'active' : ''}`}>
      <div
        className='tree-button'
        onClick={toggleActive}>
        {isActive 
          ? <> <ArrowDropDownIcon /> {showAvatar ? <AccountCircleIcon /> : <FolderOpenIcon  />}</> 
          : <><ArrowRightIcon /> {showAvatar ? <AccountCircleIcon /> : <FolderIcon  />}</>}
      </div>
      {showAvatar && <InlineEditableRegion editable={isActive} item={item} property='author' classes={'first'} />}
      <InlineEditableRegion editable={isActive} item={item} property='text' classes={!showAvatar && 'first'} />
      <div className={'flex-row last'}>
        <div className={'flex-row'}>
          <FmdGoodIcon />
          <InlineEditableRegion editable={isActive} item={item} property='location' />
        </div>
        <div className={'flex-row date'}>
          <CalendarTodayIcon />
          {formattedDate}
        </div>
      </div>
    </li>
  );
};

export default TreeItem;
