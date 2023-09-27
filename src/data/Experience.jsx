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
          years='2022-2023'
          header='ПАО Татнефть'
          title='Frontend разработчик'
        >
        <h5 className='py-2'>Задачи:</h5>
        <li>Создание адаптивных компонентов на основе React и material-ui;</li>
        <li>Создание форм (react-hook-form) для сбора, обработки и хранения информации о скважинах (виды работ, время выполнения, потери в период простоя);</li>
        <li>Отправка данных на сервер (axios)</li>
        <li>Подключение к API</li>
        <li>работа с авторизацией, в том числе настройка прав и ролей пользователей;</li>
        <h5 className='py-2'>Достижения:</h5>
        <li>Предложил и успешно внедрил асинхронный стейт менеджер react-query;</li>
        </MarkedItem>
      </div>
    </Container>
  );
};

export default Experience;
