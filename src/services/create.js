const axios = require('axios');

const create = async (user) => {
  if(user.login) {
    try{
      const url = 'http://localhost:5000/users'
      const res = axios({
        method: 'POST',
        url: url,
        data: user,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json'
        }
      })
        .then(response => response.data)
        .catch(err => console.log(err))
      return res;
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      const url = ' http://localhost:5000/clients'
      const res = axios({
        method: 'POST',
        url: url,
        data: user,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json'
        }
      })
        .then(response => response.data)
        .catch(err => console.log(err))
      return res;
    } catch (err) {
      console.log(err)
    }
  }
}

export default create;