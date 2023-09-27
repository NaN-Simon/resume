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
              <h3>Form and Elements</h3>
              <p>Range slider, pagination, datepicker, masked text field - компоненты с плагинами. Остальные компоненты написаны вручную.</p>
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
            <h3>Form and Elements</h3>
            <p>Все компоненты написаны вручную. Dropdown считает любое настраиваемое кол-во комнат/гостей</p>
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
              <h3>Cards</h3>
              <p>Карусель, календарь, datepicker - компоненты с плагинами. Остальные компоненты написаны вручную.</p>
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
              <h3>Headers And Footers</h3>
              <p>Два состояния навигации и футер. На мобильных устройствах используется бургер-меню.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProjectGallery;
