import React, { useState } from 'react'
import { Form, Input, Card, Row, Button, Radio } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {searchUserByName, searchUserById, searchAllUsers, searchClientByName, searchClientById, searchAllClients} from '../services/search'

const FindPerson = (props) => {
  const [find, setFind] = useState('all');
  const [persons, setPersons] = useState(null);
  const [firstRender, setFirstRender] = useState(true);
  const isUser = props.name.includes('Usuário');

  const validateMessages = {
    required: '${label} é obrigatório!'
  }

  const handleSearchUser = async (value) => {
    if(value.name) {
      await searchUserByName(value.name).then(response => setPersons(response));
    } else if(value.id) {
      await searchUserById(value.id).then(response => setPersons(response ? [response]: undefined));
    } else {
      await searchAllUsers().then(response => setPersons(response));
    }
    setFirstRender(false);
  }

  const handleSearchClient = async (value) => {
    if(value.name) {
      await searchClientByName(value.name).then(response => setPersons(response));
    } else if(value.id) {
      await searchClientById(value.id).then(response => setPersons(response ? [response]: undefined));
    } else {
      await searchAllClients().then(response => setPersons(response));
    }
    setFirstRender(false);
  }
  
  return (
    <div>
      <Row>
        <h2>{props.name}</h2>
      </Row>
      <Row>
        <Radio.Group>
          <Radio.Button onClick={() => setFind('all')} value="all">Procurar todos</Radio.Button>
          <Radio.Button onClick={() => setFind('byName')} value="byName">Procurar por nome</Radio.Button>
          <Radio.Button onClick={() => setFind('byId')} value="byId">Procurar por id</Radio.Button>
        </Radio.Group>
      </Row>
        <Row>
          <Form onFinish={isUser ? handleSearchUser : handleSearchClient} validateMessages={validateMessages}>
            { find === 'byName' &&
              <Form.Item name="name">
                <Input placeholder="Nome" style={{margin: '10px 0px 0px 0px'}} rules={[{ required: true }]}/>
              </Form.Item>
            }
            { find === 'byId' &&
              <Form.Item name="id">
                <Input type="number" placeholder="Id" style={{margin: '10px 0px 0px 0px'}} rules={[{ required: true }]}/>
              </Form.Item>
            }
            <Form.Item>
              <Button style={{margin: '10px 0px 0px 0px'}} type="primary" icon={<SearchOutlined />} htmlType="submit">
                Procurar
              </Button>
            </Form.Item>
          </Form>
        </Row>
        <Row>
          { persons &&
            persons.map((person) => {
              return(
                <Card size="small" style={{width: 300,margin: '10px', textAlign: 'center'}} key={person.id}>
                  <p><b>Id: </b>{person.id}</p>
                  <p><b>Nome: </b>{person.fullName}</p>
                  <p><b>Email: </b>{person.email}</p>
                  <p><b>Idade: </b>{person.age}</p>
                </Card>
              )
            })
          }
          { !firstRender && !persons &&
            <h2>Nenhum Usuário encontrado!</h2>
          }
        </Row>
    </div>
  )
}

export default FindPerson;