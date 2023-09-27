import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyNavbar from '../modules/navbar/MyNavbar';
import BackgroundPaper from '../UI/BackgroundPaper';

const Contacts = () => {
  return (
    <Container className='d-flex flex-column gap-3 position-relative py-4 px-5'>
      <BackgroundPaper />
      <MyNavbar />
      <div className='d-flex gap-5 mx-auto'>
        <Link className='link' to='https://github.com/NaN-Simon'>
          GitHub
        </Link>
        <Link className='link' to='https://t.me/NaN_Simon'>
          Telegram
        </Link>
        <p>
          <a href='mailto:3w.work@gmail.com'>3w.work@gmail.com</a>
        </p>
      </div>
    </Container>
  );
};

export default Contacts;
