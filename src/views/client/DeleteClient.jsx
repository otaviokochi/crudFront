import React, { useState } from 'react'
import { Input} from 'antd'
import {delClient} from '../../services/delete'

const DeleteClient = () => {
  const { Search } = Input;
  const [deletedSuccessfully, setdeletedSuccessfully] = useState(false);

  const handleDelete = (id) => {
    delClient(id)
      .then(response => {
        setdeletedSuccessfully(response.data.message);
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>Deletar Cliente</h2>
      <Search type="number" placeholder="Id do cliente a ser deletado!" enterButton="Deletar" allowClear onSearch={handleDelete}/>
      <h2>{deletedSuccessfully}</h2>
    </div>
  )
}

export default DeleteClient;