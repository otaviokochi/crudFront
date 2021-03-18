import axios from 'axios'

const loginRequest = async (login, password) => {
  const url = 'http://localhost:5000/signin';
  const res = await axios({
    method: 'POST',
    url: url,
    data: {
      login,
      password
    }
  })
  return res;
}

export default loginRequest;