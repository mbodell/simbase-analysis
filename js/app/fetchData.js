let fetchData = {};
const axios = require('axios');

fetchData.getPage = async function(uri) {
  try {
    const response = await axios.get(uri);
    console.log('success');
    //console.log(response);
  } catch (error) {
    console.error('error');
    //console.error(error);
  }
  return 4;
}



module.exports = fetchData;
