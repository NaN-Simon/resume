import React from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { ReactComponent as MarkerSVG } from '../../assets/icons/svg/Marker.svg';

const List = ({ title = 'List', array, svg }) => {
  return (
    <Container className='m-0 p-0' style={{ backgroundColor: 'inherit', color: 'inherit' }}>
      <div className='d-flex align-items-center '>
      <p style={{transform: 'scale(0.6)', margin: 0}}>{svg}</p>
        <h3 style={{fontVariant: 'all-small-caps'}}>{title}</h3>
      </div>
      <ListGroup className='my-4'>
        {array.map((item) => {
          return (
            <ListGroup.Item key={item} className='border-0 d-flex gap-2 align-items-center my-1 p-0' style={{backgroundColor: 'inherit', color: 'inherit'}}>
              <MarkerSVG width='30px' />
              <h5
                className='m-0'
                style={{
                  fontVariant: 'all-small-caps',
                  wordBreak: 'break-word',
                }}
              >
                {item}
              </h5>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default List;
