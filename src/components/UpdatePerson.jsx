import React, { useState, useEffect } from 'react'
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
  const [findPerson, setFindPerson] = useState(false);

  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
  };

  useEffect(() => {
    form.setFieldsValue({
      name: personData.fullName,
      email: personData.email,
      address: personData.address,
      age: personData.age,
      cpf: personData.cpf
    })
  }, [personData, form])
  
  const searchUser = async (id) => {
    if (id) {
      await searchUserById(id)
        .then(response => {
          if (response.data) {
            setPersonData(response.data)
            setFindPerson(true)
            setIdPerson(id);
          }
          else {
            setPersonData(false);
            setFindPerson(false);
          }
        })
        .catch(err => {
          setPersonData(false);
          setFindPerson(false);
          console.log(err);
        });
      setFirstRender(false);
    }
  }

  const searchClient = async (id) => {
    if (id) {
      await searchClientById(id)
        .then(response => {
          if (response.data) {
            setPersonData(response.data)
            setFindPerson(true)
            setIdPerson(id);
          } else {
            setPersonData(false);
            setFindPerson(false);
          }
        })
        .catch(err => {
          setPersonData(false);
          setFindPerson(false);
          console.log(err);
        });
      setFirstRender(false);
    }
  }

  const onFinishUser = (values) => {
    updateUser(idPerson, values)
      .then(response => {
        setPersonData(false);
        setUpdatedSuccessfully(response.data.message);
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
        setUpdatedSuccessfully(response.data.message);
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
        <Search type="number" placeholder="Id do usuário a ser alterado!" enterButton="Alterar" allowClear onSearch={searchUser} />
      }
      { !isUser &&
        <Search type="number" placeholder="Id do cliente a ser alterado!" enterButton="Alterar" allowClear onSearch={searchClient} />
      }
      { personData &&
        <Form style={{ margin: '20px 0px' }} {...layout} form={form} name="create" onFinish={isUser ? onFinishUser : onFinishClient}>
          <Form.Item name="name" label="Nome" rules={[{ required: true, message: 'Nome é obrigatório' }]} >
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Email é obrigatório' }]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item name="age" label="Idade" rules={[{ required: true, message: 'Idade é obrigatório' }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="address" label="Endereço" rules={[{ required: true, message: 'Endereço é obrigatório' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="cpf" label="Cpf" rules={[{ required: true, message: 'Cpf é obrigatório' }]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
            <Button type="primary" htmlType="submit">
              Alterar
            </Button>
          </Form.Item>
        </Form>
      }
      { !findPerson && !firstRender &&
        <h2 style={{ margin: '20px 0px' }}>
          {isUser ? 'Usuário' : 'Cliente  '} não encontrado!
        </h2>
      }
      { !personData && !firstRender && findPerson &&
        <h2 style={{ margin: '20px 0px' }}>
          {updatedSuccessfully}
        </h2>
      }
    </div>
  )
}

export default UpdatePerson;