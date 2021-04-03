import axios from 'axios'

export const updateUser = async (id, values) => {
  const url = `http://localhost:5000/users/${id}`;
  return await axios({
    method: 'PUT',
    url: url,
    data: values
  })
}

export const updateClient = async (id, values) => {
  const url = `http://localhost:5000/clients/${id}`;
  return await axios({
    method: 'PUT',
    url: url,
    data: values
  })
}
 