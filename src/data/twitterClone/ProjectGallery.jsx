import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import screen1 from './screen1.png'
import screen2 from './screen2.png'
import screen3 from './screen3.png'
import screen4 from './screen4.png'

const ProjectGallery = () => {
  return (
    <div className='af-height-90 af-max-width mx-auto mt-2'>
      <Carousel pause='hover' interval={10000}>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={screen1}
            alt='First slide'
          />
          <Carousel.Caption className='position-absolute'>
            <div className='af-position-lg af-bg-dark-transparent py-3'>
              <h3>Home page</h3>
              <p>После написания текста и/или добавления картинки - твит отправляется на сервер. Список твитов обновляется.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={screen2}
            alt='Third slide'
          />
          <Carousel.Caption className='position-absolute'>
            <div className='af-position-lg af-bg-dark-transparent py-3'>
            <h3>Explore page</h3>
            <p>Можно подписаться, зайти на каждую станицу и посмотреть информацию о пользователе, твиты.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={screen3}
            alt='Third slide'
          />
          <Carousel.Caption className='position-absolute'>
            <div className='af-position-lg af-bg-dark-transparent py-3'>
              <h3>Profile page</h3>
              <p>Отображение своих твитов/ретвитов/реплаев на странице Profile</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={screen4}
            alt='Third slide'
          />
          <Carousel.Caption className='position-absolute'>
            <div className='af-position-lg af-bg-dark-transparent py-3'>
              <h3>Profile page</h3>
              <p>Информация о текущем пользователе, возможность изменить текущие данные.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProjectGallery;
