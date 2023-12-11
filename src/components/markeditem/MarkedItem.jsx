import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Lollipop from '../../UI/Lollipop';
const MarkedItem = ({children, years, header, title, style }) => {
  return (
    <Container style={{...style}} className='m-0 p-0'>

      <Row className='m-0 p-0'>
        <Col className='d-flex flex-column gap-3 m-0 p-0' sm={2}>{years}</Col>
        <Col className='d-flex flex-column gap-3 m-0 p-0' sm={2}>
          <Lollipop/>
        </Col>
        <Col className='d-flex flex-column gap-3 m-0 p-0' sm={8}>
          <ListGroup className='m-0'>
            <ListGroup.Item
              className='border-0 m-0 p-1 bg-success rounded'
              style={{backgroundColor: 'inherit', color: 'inherit', fontSize: '22px'}}>
            {header}
            </ListGroup.Item>
            <ListGroup.Item
              className='border-0 m-0 p-0 pb-3'
              style={{backgroundColor: 'inherit', color: 'inherit', fontSize: '16px'}}>
            {title}
            </ListGroup.Item>
            <ListGroup.Item
              className='border-0 m-0 p-0 pb-5'
              style={{backgroundColor: 'inherit', color: 'inherit'}}>
            {children}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      </Container>
  )
}

export default MarkedItem