import axios from 'axios'
const urlClient = 'http://localhost:5000/clients';
const urlUser = 'http://localhost:5000/users';

export const searchUserByName = async (name) => {
  const res = await axios({
    method: 'GET',
    url: urlUser + `?fullName=${name}`,
    headers: {
      'Content-type': 'application/json'
    }
  })
  return res;
}

export const searchUserById = async (id) => {
  const res = await axios({
    method: 'GET',
    url: urlUser + `/${id}`,
    headers: {
      'Content-type': 'application/json'
    }
  })
  return res;
}

export const searchAllUsers = async () => {
  const res = await axios({
    method: 'GET',
    url: urlUser,
    headers: {
      'Content-type': 'application/json'
    }
  })
  return res;
}


export const searchClientByName = async (name) => {
  const res = await axios({
    method: 'GET',
    url: urlClient + `?fullName=${name}`,
    headers: {
      'Content-type': 'application/json'
    }
  })
  return res;
}

export const searchClientById = async (id) => {
  const res = await axios({
    method: 'GET',
    url: urlClient + `/${id}`,
    headers: {
      'Content-type': 'application/json'
    } 
  })
  return res;
}

export const searchAllClients = async () => {
  const res = await axios({
    method: 'GET',
    url: urlClient,
    headers: {
      'Content-type': 'application/json'
    }
  })
  return res;
}
