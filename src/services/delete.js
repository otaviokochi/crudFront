import axios from 'axios'

export const delUser = id => {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:5000/users/${id}`;
    try {
      axios.delete(url)
        .then(response => resolve(response.data))
        .catch(err => reject(err));
    } catch (err) {
      reject(err);
    }
  })
}

export const delClient = async (id) => {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:5000/clients/${id}`;
    try {
      axios.delete(url)
        .then(response => resolve(response.data))
        .catch(err => reject(err));
    } catch (err) {
      reject(err);
    }
  })
}