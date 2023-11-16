// src/components/TreeComponent.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { loadData } from '../actions/action';
import fetchData from '../ApiService';
import GroupKeyTreeItem from './GroupKeyTreeItem';
import Filters from './Filters';

function TreeComponent() {
  const data = useSelector((state) => state.data);
  const groupBy = useSelector((state) => state.groupBy);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const result = await fetchData(); // Assuming fetchData is an async function that fetches data
        dispatch(loadData(result));
      } catch (error) {
        // Handle error
      }
    };

    fetchDataAndSetState();
  }, [dispatch]);

  const groupData = () => {
    if (!data) return null;

    const groupedData = {};

    data.forEach(item => {
      let groupKey = '';

      if (groupBy === 'week') {
        // Group by week using moment.js to calculate the ISO week number
        const weekNumber = moment.unix(item.time).isoWeek();
        groupKey = `Week ${weekNumber}`;
      } else if (groupBy === 'author') {
        groupKey = item.author;
      } else if (groupBy === 'location') {
        groupKey = item.location;
      }

      if (!groupedData[groupKey]) {
        groupedData[groupKey] = [];
      }

      groupedData[groupKey].push(item);
    });

    return groupedData;
  };

  const renderTree = () => {
    const groupedData = groupData();

    if (groupedData === null) {
      return <p>No data available.</p>;
    }

    return (
      <ul>
        {Object.entries(groupedData).map(([groupKey, entries]) => (
          <GroupKeyTreeItem key={groupKey} groupKey={groupKey} entries={entries}/>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Filters />
      {renderTree()}
    </div>
  );
}

export default TreeComponent;
