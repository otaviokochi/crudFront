import axios from 'axios'
const urlClient = 'http://localhost:5000/clients';
const urlUser = 'http://localhost:5000/users';

export const searchUserByName = async (name) => {
  return await axios({
    method: 'GET',
    url: urlUser + `?fullName=${name}`,
  })
}

export const searchUserById = async (id) => {
  return await axios({
    method: 'GET',
    url: urlUser + `/${id}`,
  })
}

export const searchAllUsers = async () => {
  return await axios({
    method: 'GET',
    url: urlUser,
  })
}


export const searchClientByName = async (name) => {
  return await axios({
    method: 'GET',
    url: urlClient + `?fullName=${name}`,
  })
}

export const searchClientById = async (id) => {
  return await axios({
    method: 'GET',
    url: urlClient + `/${id}`,
  })
}

export const searchAllClients = async () => {
  return await axios({
    method: 'GET',
    url: urlClient,
  })
}
