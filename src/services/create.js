const axios = require('axios');

const create = async user => {
  if (user.login) {
    const url = 'http://localhost:5000/users'
    const res = await axios({
      method: 'POST',
      url: url,
      data: user,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      }
    })
    return res;
  } else {
    const url = ' http://localhost:5000/clients'
    const res = await axios({
      method: 'POST',
      url: url,
      data: user,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      }
    })
    return res;
  }
}

export default create;