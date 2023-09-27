import React from 'react';
import { Container } from 'react-bootstrap';
import MyNavbar from '../modules/navbar/MyNavbar';
import DataCodeLibrary from '../data/codeLibrary/DataCodeLibrary';
import BackgroundPaper from '../UI/BackgroundPaper';

const CodeLibrary = () => {
  return (
    <Container className='d-flex flex-column gap-3 position-relative p-0 m-sm-0 m-md-auto'>
      <BackgroundPaper />
      <MyNavbar />
      <DataCodeLibrary />
    </Container>
  );
};

export default CodeLibrary;
