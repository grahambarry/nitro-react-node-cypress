export const loadData = (data) => ({
    type: 'LOAD_DATA',
    payload: data,
  });
  
export const setGroupBy = (groupBy) => ({
  type: 'SET_GROUP_BY',
  payload: groupBy,
});

export const setData = (id, property, value) => ({
  type: 'SET_DATA',
  payload: { id, property, value },
});