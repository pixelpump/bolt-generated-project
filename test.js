const axios = require('axios');

const apiKey = 'YOUR_GROQ_API_KEY'; // Replace with your actual API key
const endpoint = 'https://<your-project-id>.api.sanity.io/v1/data/query/production?query=*[_type == "yourType"][0]'; // Replace with your actual endpoint

async function testGROQ() {
  try {
    const response = await axios.get(endpoint, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error testing GROQ API:', error.message);
  }
}

testGROQ();
