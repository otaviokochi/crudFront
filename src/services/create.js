const axios = require('axios');

const create = async user => {
  if (user.login) {
    const url = 'http://localhost:5000/users'
    return await axios({
      method: 'POST',
      url: url,
      data: user,
    })
  } else {
    const url = ' http://localhost:5000/clients'
    return await axios({
      method: 'POST',
      url: url,
      data: user,
    })
  }
}

export default create;