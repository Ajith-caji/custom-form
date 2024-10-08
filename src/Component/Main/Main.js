import { Row,Col} from 'antd'
import React from 'react'
import Genericform from '../Genericform/Genericform'
import Dashboard from '../Dashboard/Dashboard'
import { InputProvider } from '../Store/Inputcontext'

function Main() {
  return (
    <InputProvider>
    <Row>
        <Col xs={24} sm={24} md={16} lg={16} xl={16} className='flex justify-center'>
        <Genericform />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}className='flex justify-end'>
        <Dashboard />
        </Col>
    </Row>
    </InputProvider>
  )
}

export default Main