import axios from 'axios'
const urlClient = 'http://localhost:5000/clients';
const urlUser = 'http://localhost:5000/users';

export const searchUserByName = async (name) => {
  try {
    const res = await axios({
      method: 'GET',
      url: urlUser + `?fullName=${name}`,
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => response.data)
      .catch(err => err);
    return res;
  } catch (err) {
    return err
  }
}

export const searchUserById = async (id) => {
  try {
    const res = await axios({
      method: 'GET',
      url: urlUser + `/${id}`,
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => response.data)
      .catch(err => err);
    return res;
  } catch (err) {
    return err;
  }
}

export const searchAllUsers = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: urlUser,
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => response.data)
      .catch(err => err);
    return res;
  } catch (err) {
    return err
  }
}


export const searchClientByName = async (name) => {
  try {
    const res = await axios({
      method: 'GET',
      url: urlClient + `?fullName=${name}`,
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => response.data)
      .catch(err => err);
    return res;
  } catch (err) {
    return err
  }
}

export const searchClientById = async (id) => {
  try {
    const res = await axios({
      method: 'GET',
      url: urlClient + `/${id}`,
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => response.data)
      .catch(err => err);
    return res;
  } catch (err) {
    return err
  }
}

export const searchAllClients = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: urlClient,
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => response.data)
      .catch(err => err);
    return res;
  } catch (err) {
    return err
  }
}
