import axios from 'axios'
const urlClient = 'http://localhost:5000/clients';
const urlUser = 'http://localhost:5000/users';

export const searchUserByName = async (name) => {
  return await axios({
    method: 'GET',
    url: urlUser + `?fullName=${name}`,
    headers: {
      'Content-type': 'application/json'
    }
  })
}

export const searchUserById = async (id) => {
  return await axios({
    method: 'GET',
    url: urlUser + `/${id}`,
    headers: {
      'Content-type': 'application/json'
    }
  })
}

export const searchAllUsers = async () => {
  return await axios({
    method: 'GET',
    url: urlUser,
    headers: {
      'Content-type': 'application/json'
    }
  })
}


export const searchClientByName = async (name) => {
  return await axios({
    method: 'GET',
    url: urlClient + `?fullName=${name}`,
    headers: {
      'Content-type': 'application/json'
    }
  })
}

export const searchClientById = async (id) => {
  return await axios({
    method: 'GET',
    url: urlClient + `/${id}`,
    headers: {
      'Content-type': 'application/json'
    } 
  })
}

export const searchAllClients = async () => {
  return await axios({
    method: 'GET',
    url: urlClient,
    headers: {
      'Content-type': 'application/json'
    }
  })
}
