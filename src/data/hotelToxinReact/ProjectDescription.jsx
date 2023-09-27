import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ProjectDescription = () => {
  const styleItem = {
    border: 0,
  };
  return (
    <ListGroup style={{ maxWidth: '800px' }}>
      <ListGroup.Item style={styleItem}>
        <strong>Фреймворк.</strong> В качестве основы используется JavaScript
        библиотека <mark>React</mark>. Каждая страница связана роутингом плагина{' '}
        <mark>react-router-dom</mark> (6-версии) через Link;
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <strong>Typescript</strong>;
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        Страницы в папке <code>src/pages</code>. Все пропсы лежат внутри tsx
        страниц ввиду отсутствия сервера;
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <strong>Библиотека компонентов.</strong> Библиотеки не используются, так
        как цель работы - показать умения работать без использования сторонних
        пользовательских интерфейсов. Используется только библиотека
        иконок(плагин <mark>material-icons</mark>);
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        На проекте используется <mark>eslint</mark> и <mark>stylelint</mark>.
        Основными пакетными настройками являются: "plugin:react/recommended",
        "airbnb". Настроено автоисправление возможных ошибок;
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        Папка <code>src/styles</code> содержит базовые стили для всего проекта,
        стили обнуления, файл со шрифтами и миксины плагина{' '}
        <mark>SASS/SCSS</mark>. Вся остальные стайл-компоненты вынесены в
        отдельные файлы <code>*.module.css</code> , данный паттерн используется
        во всем проекте. Для комфортного объединения
        <code> className</code> используется плагин <mark>classnames</mark>;
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        Папка <code>src/components</code> содержит все компоненты и карточки (
        <code>src/components/Card*</code>) с компонентами. Используемые плагины:
        <mark>rc-slider</mark>, <mark>react-datepicker</mark>,{' '}
        <mark>react-input-mask</mark>, <mark>react-paginate</mark>,
        <mark>react-responsive-carousel</mark>;
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <code>src/assets</code> папка содержит файлы проекта(иконки которых нет
        в библиотеке <mark>material-icons</mark>, img, fonts);
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        Установлен плагин <mark>gh-pages</mark> для комфортного деплоя;
      </ListGroup.Item>

      <ListGroup.Item style={styleItem}>
        <strong>Installation:</strong>
        <p>
          <code>npm install</code> - инициализация, скачивание и установка
          зависимостей
        </p>
        <p>
          <code>npm run start</code> - запуск проекта на localhost'е, по
          умолчанию: http://localhost:3000/
        </p>
        <p>
          <code>npm run build</code> - сборка проекта
        </p>
        <p>
          <code>npm run deploy</code> - деплой
        </p>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ProjectDescription;
