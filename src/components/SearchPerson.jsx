import React, { useState } from 'react'
import { Form, Input, Row, Button, Radio, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { searchUserByName, searchUserById, searchAllUsers, searchClientByName, searchClientById, searchAllClients } from '../services/search'

const SeachPerson = (props) => {
  const [find, setFind] = useState('all');
  const [persons, setPersons] = useState(null);
  const [firstRender, setFirstRender] = useState(true);
  const isUser = props.name.includes('Usuário');
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Nome",
      dataIndex: "fullName",
      key: "fullName"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Idade",
      dataIndex: "age",
      key: "age"
    },
  ]

  const handleSearchUser = async (value) => {
    if (value.name) {
      await searchUserByName(value.name)
        .then(response => response.data)
        .then(data => setPersons(data.length > 0 ? data.map((person, index) => {return { ...person, key: index } }) : undefined));
    } else if (value.id) {
      await searchUserById(value.id)
        .then(response => response.data)
        .then(data => setPersons(data ? [data].map((person, index) => {return { ...person, key: index } }) : undefined));
    } else {
      await searchAllUsers()
        .then(response => {
          return response.data})
        .then(data => setPersons(data.length > 0 ? data.map((person, index) => {return { ...person, key: index } }) : undefined));
    }
    setFirstRender(false);
  }

  const handleSearchClient = async (value) => {
    if (value.name) {
      await searchClientByName(value.name)
        .then(response => response.data)
        .then(data => setPersons(data.length > 0 ? data.map((person, index) => {return { ...person, key: index } }) : undefined));
    } else if (value.id) {
      await searchClientById(value.id)
        .then(response => response.data)
        .then(data => setPersons(data ? [data].map((person, index) => {return { ...person, key: index } }) : undefined));
    } else {
      await searchAllClients()
        .then(response => response.data)
        .then(data => setPersons(data.length > 0 ? data.map((person, index) => {return { ...person, key: index } }) : undefined));
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
        <Form onFinish={isUser ? handleSearchUser : handleSearchClient}>
          {find === 'byName' &&
            <Form.Item name="name" style={{ margin: '10px 0px 0px 0px' }}>
              <Input placeholder="Nome" />
            </Form.Item>
          }
          {find === 'byId' &&
            <Form.Item name="id" style={{ margin: '10px 0px 0px 0px' }}>
              <Input type="number" placeholder="Id"   />
            </Form.Item>
          }
          <Form.Item>
            <Button style={{ margin: '10px 0px 0px 0px' }} type="primary" icon={<SearchOutlined />} htmlType="submit">
              Procurar
              </Button>
          </Form.Item>
        </Form>
      </Row>
      <Row>
        { !firstRender && 
          <Table style={{width: '100%'}} colSpan={16} dataSource={persons} columns={columns} />
        }
      </Row>
    </div>
  )
}

export default SeachPerson;