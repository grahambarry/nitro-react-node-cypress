import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../actions/action';
import DOMPurify from 'dompurify';
import EditIcon from '@mui/icons-material/Edit';

const InlineEditableRegion = ({ item, property, editable, classes }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const dispatch = useDispatch();

  const handleSetData = (id, property, value) => {
    dispatch(setData(id, property, DOMPurify.sanitize(value)));
    setIsActive(false);
  };

  const handleSetIsActive = () => {
    setIsActive(true);
  };

  return (
    <div className={`
      editButton
      ${property}
      ${classes}
      ${isActive && 'bold'}
      ${isHovered && 'showEditIcon bold'}`}>
      <div
        contentEditable={editable}
        className={`editable ${!editable && 'no-interaction'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onBlur={(e) => handleSetData(item.id, property, e.currentTarget.textContent)}
        onFocus={() => handleSetIsActive()}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item[property]) }}
      />
      <EditIcon />
    </div>
  );
};

export default InlineEditableRegion;
