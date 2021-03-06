import axios from 'axios'

const loginRequest = async (username, password) => {
  return new Promise((resolve, reject) => {
    const url = 'http://localhost:5000/login';
    try {
      axios({
        method: 'POST',
        url: url,
        data: {
          username,
          password
        }
      }).then(response => response.data == 'Credenciais erradas!' ? reject(response) : resolve(response))
        .catch(err => reject(err));
    } catch (err) {
      reject(err);
    }
  })
}

export default loginRequest;