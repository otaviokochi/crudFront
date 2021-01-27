import React, { useState } from 'react'
import { Input} from 'antd'
import {delUser} from '../../services/delete'

const DeleteUser = () => {
  const { Search } = Input;
  const [deletedSuccessfully, setdeletedSuccessfully] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const handleDelete = (id) => {
    delUser(id).then(response => {
      setFirstRender(false);
      if(response && response.message)  setdeletedSuccessfully(true);
      else setdeletedSuccessfully(false);
    })
  }

  return (
    <div>
      <h2>Deletar Usuário</h2>
      <Search type="number" placeholder="Id do usuário a ser deletado!" enterButton="Deletar" allowClear onSearch={handleDelete}/>
      { deletedSuccessfully &&
        <h2>Cliente deletado com sucesso!</h2>
      }
      { !firstRender && !deletedSuccessfully &&
        <h2>Erro ao deletar o cliente!</h2>
      }
    </div>
  )
}

export default DeleteUser;