let fetchData = {};
const axios = require('axios');

fetchData.getPage = async function(uri, parse, err) {
  try {
    const response = await axios.get(uri);
    if(parse !== undefined) {
      return parse(response.data, err);
    }
  } catch (error) {
    if(err !== undefined) {
      return err(error);
    }
    return -1;
  }
  return 0;
}



module.exports = fetchData;
