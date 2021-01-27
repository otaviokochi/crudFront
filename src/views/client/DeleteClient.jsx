import React, { useState } from 'react'
import { Input} from 'antd'
import {delClient} from '../../services/delete'

const DeleteClient = () => {
  const { Search } = Input;
  const [deletedSuccessfully, setdeletedSuccessfully] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const handleDelete = (id) => {
    delClient(id).then(response => {
      setFirstRender(false);
      if(response && response.message)  setdeletedSuccessfully(true);
      else setdeletedSuccessfully(false);
    })
  }

  return (
    <div>
      <h2>Deletar Cliente</h2>
      <Search type="number" placeholder="Id do cliente a ser deletado!" enterButton="Deletar" allowClear onSearch={handleDelete}/>
      { deletedSuccessfully &&
        <h2>Cliente deletado com sucesso!</h2>
      }
      { !firstRender && !deletedSuccessfully &&
        <h2>Erro ao deletar o cliente!</h2>
      }
    </div>
  )
}

export default DeleteClient;