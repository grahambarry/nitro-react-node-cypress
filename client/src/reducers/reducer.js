const initialState = {
    data: null,
    groupBy: 'week',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_DATA':
        return {
          ...state,
          data: action.payload,
        };
      case 'SET_DATA':
        // Find the index of the item with the given id in the data array
        const dataIndex = state.data.findIndex(item => item.id === action.payload.id);
  
        // If the item is found, update the specified property
        if (dataIndex !== -1) {
          const updatedData = [...state.data];
          updatedData[dataIndex] = {
            ...updatedData[dataIndex],
            [action.payload.property]: action.payload.value,
          };
  
          return {
            ...state,
            data: updatedData,
          };
        }
        // If the item with the given id is not found, do nothing
        return state;
      case 'SET_GROUP_BY':
        return {
          ...state,
          groupBy: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  