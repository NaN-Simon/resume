import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import List from '../components/list/List';
import UserCard from '../components/card/UserCard';

import MyNavbar from '../modules/navbar/MyNavbar';
import ProjectList from '../modules/projectList/ProjectList';

import BackgroundPaper from '../UI/BackgroundPaper';
import Avatar from '../UI/Avatar';

import dataAvatar from '../data/avatar.jpg';
import Experience from '../data/Experience';
import hardSkills from '../data/hardSkills.json';
import otherSkills from '../data/otherSkills.json';
import languages from '../data/languages.json';
import contacts from '../data/contacts.json';
import userData from '../data/userData.json';

import { ReactComponent as SwordsSVG } from '../assets/icons/svg/Swords.svg';
import { ReactComponent as ShieldSVG } from '../assets/icons/svg/Shield.svg';
import { ReactComponent as MicrophoneSVG } from '../assets/icons/svg/Microphone.svg';
import { ReactComponent as InfoSVG } from '../assets/icons/svg/Info.svg';

const Home = () => {
  return (
    <Container className='d-flex flex-column gap-3 position-relative p-0 m-sm-0 m-md-auto'>
      <BackgroundPaper/>
      <MyNavbar />
      <Row className='m-0 p-0 '>
        <Col className='d-flex flex-column gap-3 m-0 p-0' sm={4} style={{minWidth: '320px'}}>
          <Avatar img={dataAvatar} />
          <List title='tools' array={hardSkills} svg={<SwordsSVG/>} />
          <List title='other tools' array={otherSkills} svg={<ShieldSVG/>} />
          <List title='languages' array={languages} svg={<MicrophoneSVG/>} />
          <List title='Info' array={contacts} svg={<InfoSVG/>} />
        </Col>
        <Col className='d-flex flex-column gap-3 m-0 p-0 col-sm-4 col-md-6 col-lg-8'>
          <UserCard userData={userData} />
          <Experience />
          <ProjectList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
