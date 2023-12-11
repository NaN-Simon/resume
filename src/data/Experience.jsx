import React from 'react';
import { Container } from 'react-bootstrap';
import MarkedItem from '../components/markeditem/MarkedItem';

const Experience = () => {
  return (
    <Container className='d-flex flex-row m-0 p-0'>
      <div
      className='mx-4'
        style={{
          width: '10px',
          height: '100%',
          backgroundColor: '#DEC802'

        }}
      ></div>
      <div>
        <h3 style={{paddingBottom: '10px', fontVariant: 'all-small-caps'}}>Experience</h3>
        <MarkedItem
          years='2023 (2 месяца)'
          header='Стартап - ООО телега.тв'
          title='Frontend разработчик'
        >
        <h5 className='py-2'>Задачи:</h5>
        <li>Разработка видеоплеера для обработки видео</li>
        <li>Динамическая загрузка файлов (drag & drop, процесс загрузки)</li>
        <li>Работа с таймлайном и группами пользователей</li>
        <h5 className='py-2'>Обретенные навыки:</h5>
        <li>VUE 3, nuxt, pinia, XHR, plyr, wavesurfer</li>
        </MarkedItem>
        <MarkedItem
          years='2022-2023 (1.5 года)'
          header='Компания - ПАО Татнефть'
          title='Frontend разработчик'
        >
        <h5 className='py-2'>Задачи:</h5>
        <li>Разработка адаптивных компонентов;</li>
        <li>Создание форм, таблиц, графиков для сбора, обработки(поиск, фильтр) и хранения информации;</li>
        <li>API</li>
        <li>Авторизация, права и роли пользователей;</li>
        <h5 className='py-2'>Обретенные навыки:</h5>
        <li>React, RTK Query, react-query, axios, react-hook-form, material-ui</li>
        <h5 className='py-2'>Достижения:</h5>
        <li>Предложил и успешно внедрил асинхронный стейт менеджер react-query;</li>
        </MarkedItem>
      </div>
    </Container>
  );
};

export default Experience;
