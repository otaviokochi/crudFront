import axios from 'axios'

export const updateUser = (id, values) => {
  const url = `http://localhost:5000/users/${id}`;
  try {
    const res = axios({
      method: 'PUT',
      url: url,
      data: values
    })
      .then(response => response.data)
      .catch(err => err);
    return res;
  } catch (err) {
    console.log(err);
  }
}

export const updateClient = (id, values) => {
  const url = `http://localhost:5000/clients/${id}`;
  try {
    const res = axios({
      method: 'PUT',
      url: url,
      data: values
    })
      .then(response => response.data)
      .catch(err => err);
    return res;
  } catch (err) {
    console.log(err);
  }
}
 