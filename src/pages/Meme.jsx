import React from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from '../modules/navbar/MyNavbar';
import meme0 from '../assets/images/meme/meme0.jpg';
import meme1 from '../assets/images/meme/meme1.jpg';
import meme2 from '../assets/images/meme/meme2.jpg';
import meme3 from '../assets/images/meme/meme3.jpg';
import meme4 from '../assets/images/meme/meme4.jpg';
import meme5 from '../assets/images/meme/meme5.jpg';
import meme6 from '../assets/images/meme/meme6.jpg';
import meme7 from '../assets/images/meme/meme7.jpg';
import meme8 from '../assets/images/meme/meme8.jpg';
import meme9 from '../assets/images/meme/meme9.jpg';
import meme10 from '../assets/images/meme/meme10.jpg';
import meme11 from '../assets/images/meme/meme11.jpg';
import BackgroundPaper from '../UI/BackgroundPaper';

const Home = () => {
  return (
    <Container className='d-flex flex-column gap-3 position-relative p-0 m-sm-0 m-md-auto'>
      <BackgroundPaper />
      <MyNavbar />
      <Row className='m-0 p-0 d-flex justify-content-center'>
        <Col className='d-flex flex-column gap-3 m-0 p-0 col-md-8 col-lg-6'>
          <Image className='img-fluid' src={meme0} rounded />
          <Image className='img-fluid' src={meme1} rounded />
          <Image className='img-fluid' src={meme2} rounded />
          <Image className='img-fluid' src={meme3} rounded />
          <Image className='img-fluid' src={meme4} rounded />
          <Image className='img-fluid' src={meme5} rounded />
          <Image className='img-fluid' src={meme6} rounded />
          <Image className='img-fluid' src={meme7} rounded />
          <Image className='img-fluid' src={meme8} rounded />
          <Image className='img-fluid' src={meme9} rounded />
          <Image className='img-fluid' src={meme10} rounded />
          <Image className='img-fluid' src={meme11} rounded />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
