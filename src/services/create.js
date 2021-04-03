const axios = require('axios');

const create = async user => {
  if (user.login) {
    const url = 'http://localhost:5000/users'
    return await axios({
      method: 'POST',
      url: url,
      data: user,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      }
    })
  } else {
    const url = ' http://localhost:5000/clients'
    return await axios({
      method: 'POST',
      url: url,
      data: user,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      }
    })
  }
}

export default create;