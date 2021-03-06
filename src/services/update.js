import axios from 'axios'

export const updateUser = (id, values) => {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:5000/users/${id}`;
    try {
      axios({
        method: 'PUT',
        url: url,
        data: values
      })
        .then(response => resolve(response.data))
        .catch(err => reject(err));
    } catch (err) {
      reject(err);
    }
  })
}

export const updateClient = (id, values) => {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:5000/clients/${id}`;
    try {
      axios({
        method: 'PUT',
        url: url,
        data: values
      })
        .then(response => resolve(response.data))
        .catch(err => reject(err));
    } catch (err) {
      reject(err);
    }
  })
}
 