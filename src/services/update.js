import axios from 'axios'

export const updateUser = async (id, values) => {
  const url = `http://localhost:5000/users/${id}`;
  const res = await axios({
    method: 'PUT',
    url: url,
    data: values
  })
  return res;
}

export const updateClient = async (id, values) => {
  const url = `http://localhost:5000/clients/${id}`;
  const res = await axios({
    method: 'PUT',
    url: url,
    data: values
  })
  return res;
}
 