import React from 'react';
import { Container, Image } from 'react-bootstrap';
import pathImg from './path.jpg';
import ProjectDescription from './ProjectDescription';
import ProjectGallery from './ProjectGallery';

const DataHotelToxinReact = () => {
  return (
    <Container id='DataHotelToxinReact' className='d-flex flex-column gap-3 position-relative p-0 m-0'>
      <h3 style={{width: '100%', textAlign: 'center', fontVariant: 'all-small-caps'}}>Hotel Toxin React</h3>
      <Container className='m-0 p-0 d-flex flex-row justify-content-center align-items-start flex-wrap'>
        <Image width='300px' src={pathImg} className='mx-5 object-fit-contain' />
        <ProjectDescription />
      </Container>
      <ProjectGallery />
    </Container>
  )
}

export default DataHotelToxinReact