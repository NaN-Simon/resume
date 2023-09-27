import React from 'react';
import { Container } from 'react-bootstrap';
import MyNavbar from '../modules/navbar/MyNavbar';
import DataTwitterClone from '../data/twitterClone/DataTwitterClone';
import DataHotelToxinReact from '../data/hotelToxinReact/DataHotelToxinReact';
import BackgroundPaper from '../UI/BackgroundPaper';

const Projects = () => {
  return (
    <Container className='d-flex flex-column gap-3 position-relative p-0 m-sm-0 m-md-auto'>
      <BackgroundPaper />
      <MyNavbar />
      <DataTwitterClone />
      <DataHotelToxinReact />
    </Container>
  );
};

export default Projects;
