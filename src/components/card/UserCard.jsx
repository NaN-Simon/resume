import React from 'react';
import Card from 'react-bootstrap/Card';

const UserCard = ({userData}) => {
  return (
    <Card style={{ width: 'auto', maxWidth: '2480px', backgroundColor: 'inherit', color: 'inherit' }} className='border-0'>
      <Card.Body>
        <Card.Title>
          <h1>{userData.name}</h1>
        </Card.Title>
        <Card.Title>
          <h2>{userData.role}</h2>
        </Card.Title>
        <div
          style={{ height: '3px', maxWidth: '600px', background: '#DEC802' }}
          className='my-5'
        ></div>
        <Card.Title>
          <h3 style={{fontVariant: 'all-small-caps'}}>About me</h3>
        </Card.Title>
        <Card.Text
          style={{
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            letterSpacing: '1.3px',
          }}
        >{userData.title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
