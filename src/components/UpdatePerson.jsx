import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { searchClientById, searchUserById } from '../services/search';
import { updateUser, updateClient } from '../services/update' 

const UpdatePerson = (props) => {
  const [form] = Form.useForm();
  const isUser = props.name.includes('Usuário');
  const [personData, setPersonData] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [idPerson, setIdPerson] = useState(null);
  const [updatedSuccessfully, setUpdatedSuccessfully] = useState(false);

  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
  };

  const searchUser = (id) => {
    if(id) {
      searchUserById(id).then(response => {
        setPersonData(response)
        setFirstRender(false);
        setIdPerson(id);
      });
    }
  }

  const searchClient = (id) => {
    if(id) {
      searchClientById(id).then(response => {
        setPersonData(response)
        setFirstRender(false);
        setIdPerson(id);
      });
    }
  }

  const onFinishUser = (values) => {
    updateUser(idPerson, values)
      .then(response => {
        setPersonData(false);
        setUpdatedSuccessfully(response.message);
      })
      .catch(err => {
        console.log(err)
        setUpdatedSuccessfully('Erro ao atualizar o usuário!');
      })
  }

  const onFinishClient = (values) => {
    updateClient(idPerson, values)
      .then(response => {
        setPersonData(false);
        setUpdatedSuccessfully(response.message);
      })
      .catch(err => {
        console.log(err)
        setUpdatedSuccessfully('Erro ao atualizar o cliente!');
      })
  }
  
  const { Search } = Input;
  return (
    <div>
      <h2>{props.name}</h2>
      { isUser &&
        <Search type="number" placeholder="Id do usuário a ser alterado!" enterButton="Alterar" allowClear onSearch={searchUser}/>
      }
      { !isUser &&
        <Search type="number" placeholder="Id do cliente a ser alterado!" enterButton="Alterar" allowClear onSearch={searchClient}/>
      }
      { personData &&
        <Form style={{margin: '20px 0px'}} {... layout} form={form} name="create" onFinish={isUser ? onFinishUser : onFinishClient} 
          initialValues={{
            name: personData.fullName,
            email: personData.email,
            age: personData.age,
            address: personData.address,
            cpf: personData.cpf
          }}
        >
          <Form.Item name="name" label="Nome" rules={[{ required: true }]}>
            <Input  />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item name="age" label="Idade" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="address" label="Endereço" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="cpf" label="Cpf" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
            <Button type="primary" htmlType="submit">
              Alterar
            </Button>
          </Form.Item>
        </Form>
      }
      { !personData && !firstRender &&
        <h2 style={{margin: '20px 0px'}}>
          {updatedSuccessfully}
        </h2>
      }
    </div>
  )
}

export default UpdatePerson;