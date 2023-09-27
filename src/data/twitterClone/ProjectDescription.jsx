import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ProjectDescription = () => {
  const styleItem = {
    border: 0,
  };
  return (
    <ListGroup style={{ maxWidth: '800px' }}>
      <ListGroup.Item style={styleItem}>
        <strong>Фреймворк</strong> В качестве основы приложения используется
        фреймворк <mark>NextJS</mark>, где каждая страница{' '}
        <code>(src/pages)</code> ассоциируется с маршрутом (роутом) по названию.
        Навигация осуществляется при помощи метода push из хука useRouter. Файлы{' '}
        <code>(src/pages)</code> является оберткой состоящей из{' '}
        <code>src/views</code> где собрана вся страница и плагина{' '}
        <mark>SEO(next-seo)</mark>, который предоставляет данные страницы для
        поисковых роботов (конфиг <code>next-seo.config.ts)</code>;
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <strong>Typescript</strong>;
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <strong>Стейтменеджер.</strong> Для выполнения асинхронных запросов
        используется
        <mark>tanStack (react-query)</mark>. Внутри проекта в папке query
        располагаются кастомные хуки которые в основном используют useQuery и
        useMutation. В параметры хуков входят queryKey(для идентификации и
        работы с кэшем), тело запроса(с использованием <mark>AXIOS</mark>) и
        параметры, например действия после успешного запроса(onSuccess) или
        инвалидация при обновлении данных(invalidateQueries) Сами тела запросов
        находятся в папке <code>src/services</code>;
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <strong>Запросы на сервер</strong> осуществляются при помощи HTTP
        клиента <mark>Axios</mark>, но обработка идет при помощи{' '}
        <mark>react-query</mark>. Все запросы идую через папку{' '}
        <code>src/api</code>, в ней идет добавление текущего JWT токена в
        localStorage пользователя, в хедер при обращении к серверу, а также его
        чтение. Имеется асинхронный метод check <code>(src/api/authCheck)</code>{' '}
        который возвращает boolean значение в зависимости от актуальности JWT
        токена(плагин <code>jwt-decode</code>);
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <strong>Библиотека компонентов</strong>: <mark>Material UI</mark>.
        Базовая стилизация реализована самой библиотекой. Дополнительная
        кастомизация осуществляется при помощи встроенного пропса sx, а также
        при помощи ссылок-рефов(ref) из <mark>React</mark>. Список
        цветов(палетка), основных наборов(h1-h6 и т.д.) и кастомных наборов
        находятся в папке <code>src/theme</code>. Другие дополнительные наборы
        плагина(типа <mark>SvgIcon</mark>) не используются;
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <code>src/styles</code> папка содержит базовые стили для всего проекта;
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <code>UI</code> папка содержит рукописную кнопку закрыть(крестик) и
        инпут с дата-маской (плагин <mark>react-input-mask</mark>);
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <code>forms</code> папка содержит компоненты форм(регистрация,
        авторизация и т.д.). Используется плагин <mark>react-hook-form</mark>{' '}
        где при помощи хука useForm осуществляется сбор данных методом register,
        передача методом handleSubmit и очистка формы методом reset. Компоненты
        разделены на логическую часть и часть верстки(папка{' '}
        <code>src/templates</code>);
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <code>src/data</code> папка содержит конфиг для меню(с url, title и
        ссылки на svg);
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <code>src/components</code> папка содержит главные компоненты
        страниц(типа Search, Inner)
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <code>src/common</code> папка содержит все переиспользуемые компоненты;
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <code>src/assets</code> папка содержит файлы проекта(svg, img);
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        <code>src/temp</code> папка содержит временные файлы проекта содержит
        тестовые посты; картинки и описания проекта;
      </ListGroup.Item>
      <ListGroup.Item style={styleItem}>
        Файл <strong>Dockerfile</strong> содержит настройки для сборки в
        <mark>Docker</mark>.
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ProjectDescription;
