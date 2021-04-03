import axios from 'axios'

export const delUser = async id => {
  const url = `http://localhost:5000/users/${id}`;
  return await axios.delete(url)
}

export const delClient = async (id) => {
  const url = `http://localhost:5000/clients/${id}`;
  return await axios.delete(url)
}