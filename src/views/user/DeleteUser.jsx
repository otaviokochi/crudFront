import React, { useState } from 'react'
import { Input} from 'antd'
import {delUser} from '../../services/delete'

const DeleteUser = () => {
  const { Search } = Input;
  const [deletedSuccessfully, setdeletedSuccessfully] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleDelete = (id) => {
    delUser(id)
      .then(response => {
        setdeletedSuccessfully(response.data.message);
      })
      .catch(err => {
        setErrorMessage(err.response.data.message);
        setdeletedSuccessfully(false);
      })
  }

  return (
    <div>
      <h2>Deletar Usuário</h2>
      <Search type="number" placeholder="Id do usuário a ser deletado!" enterButton="Deletar" allowClear onSearch={handleDelete}/>
      <h2>{deletedSuccessfully ? deletedSuccessfully : errorMessage}</h2>
    </div>
  )
}

export default DeleteUser;