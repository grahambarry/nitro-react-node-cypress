const apiKey = 'NITRO_API_KEY';

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;