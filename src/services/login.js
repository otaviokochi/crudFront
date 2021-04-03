import axios from 'axios'

const loginRequest = async (login, password) => {
  const url = 'http://localhost:5000/signin';
  return await axios({
    method: 'POST',
    url: url,
    data: {
      login,
      password
    }
  })
}

export default loginRequest;