import axios from 'axios'

export const delUser = async id => {
  const url = `http://localhost:5000/users/${id}`;
  const res = await axios.delete(url)
  return res;
}

export const delClient = async (id) => {
  const url = `http://localhost:5000/clients/${id}`;
  const res = await axios.delete(url)
  return res;
}