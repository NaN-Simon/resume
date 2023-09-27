import React from 'react';
import { Container } from 'react-bootstrap';
import MyNavbar from '../modules/navbar/MyNavbar';
import DataLinkLibrary from '../data/linkLibrary/DataLinkLibrary';
import BackgroundPaper from '../UI/BackgroundPaper';
const LinkLibrary = () => {
  return (
    <Container className='d-flex flex-column gap-3 position-relative p-0 m-sm-0 m-md-auto'>
      <BackgroundPaper />
      <MyNavbar />
      <DataLinkLibrary />
    </Container>
  );
};

export default LinkLibrary;
