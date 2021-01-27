import axios from 'axios'

const loginRequest = async (username, password) => {
  const url = 'http://localhost:5000/login';
  try {
    const res = await axios({
      method: 'POST',
      url: url,
      data: {
        username,
        password
      }
    }).then(response => response)
      .catch(err => err);
    if(res && res.data === "Credenciais erradas!") return null
    return res;
  } catch (err) {
    console.log(err)
  }
}

export default loginRequest;