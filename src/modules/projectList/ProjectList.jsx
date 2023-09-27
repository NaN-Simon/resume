import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './ProjectList.module.css';

const ProjectList = () => {
  return (
    <Container className='d-flex flex-column gap-1 p-0 m-0'>
      <h3 style={{ fontVariant: 'all-small-caps' }}>Pet projects</h3>
      <section>
        <h4 className='p-3' style={{ textAlign: 'center' }}>
          Twitter Clone - Social Network
        </h4>
        <div className='d-flex flex-column gap-2'>
          <Link className='h6' to='/projects#DataTwitterClone'>
            - Подробное техническое описание
          </Link>
          <Link
            className='h6'
            to='https://github.com/NaN-Simon/twitter-clone-frontend'
          >
            - Github
          </Link>
        </div>
        <ListGroup>
          <ListGroup.Item
            className={styles['list-item--inherit-bg-color-border']}
          >
            - React, NextJS, Typescript
          </ListGroup.Item>
          <ListGroup.Item
            className={styles['list-item--inherit-bg-color-border']}
          >
            - авторизация по JWT токену
          </ListGroup.Item>
          <ListGroup.Item
            className={styles['list-item--inherit-bg-color-border']}
          >
            - SEO (next-seo)
          </ListGroup.Item>
          <ListGroup.Item
            className={styles['list-item--inherit-bg-color-border']}
          >
            - асинхронные запросы на твиты/реплаи/ретвиты/лайки (axios,
            react-query, react-hook-form)
          </ListGroup.Item>
          <ListGroup.Item
            className={styles['list-item--inherit-bg-color-border']}
          >
            - поиск, подписка, заход на страницы к другим пользователям
          </ListGroup.Item>
          <ListGroup.Item
            className={styles['list-item--inherit-bg-color-border']}
          >
            - разграничение прав пользователей
          </ListGroup.Item>
          <ListGroup.Item
            className={styles['list-item--inherit-bg-color-border']}
          >
            - Библиотека компонентов: Material-UI
          </ListGroup.Item>
        </ListGroup>
      </section>
      <section>
        <h4 className='p-3' style={{ textAlign: 'center' }}>
          UI-Kit Hotel-Toxin-React
        </h4>
        <div className='d-flex flex-column gap-2'>
          <Link className='h6' to='/projects#DataHotelToxinReact'>
            - Подробное техническое описание
          </Link>
          <Link
            className='h6'
            to='https://github.com/NaN-Simon/hotel-toxin-react'
          >
            - Github
          </Link>
        </div>
        <ListGroup>
          <ListGroup.Item
            className={styles['list-item--inherit-bg-color-border']}
          >
            - React, react-router-dom, Typescript, Eslint
          </ListGroup.Item>
          <ListGroup.Item
            className={styles['list-item--inherit-bg-color-border']}
          >
            - SCSS, Mixins
          </ListGroup.Item>
          <ListGroup.Item
            className={styles['list-item--inherit-bg-color-border']}
          >
            - Все базовые компоненты с использованием сторонних библиотек
            (rc-slider, react-datepicker, react-input-mask, react-paginate,
            react-responsive-carousel)
          </ListGroup.Item>
          <ListGroup.Item
            className={styles['list-item--inherit-bg-color-border']}
          >
            - material-icons
          </ListGroup.Item>
        </ListGroup>
      </section>
    </Container>
  );
};

export default ProjectList;
