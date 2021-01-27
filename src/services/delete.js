import axios from 'axios'

export const delUser = async (id) => {
  const url = `http://localhost:5000/users/${id}`;
  try {
    const res = await axios.delete(url).then(response => response.data);
    return res;
  } catch (err) {
    console.log(err)
  }
}

export const delClient = async (id) => {
  const url = `http://localhost:5000/clients/${id}`;
  try {
    const res = await axios.delete(url).then(response => response.data);
    return res;
  } catch (err) {
    console.log(err)
  }
}