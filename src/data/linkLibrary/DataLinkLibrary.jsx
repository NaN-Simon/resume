import React from 'react';

const DataLinkLibrary = () => {
  const styleLink = { color: 'inherit' }
  return (
    <ul style={{ margin: '0 auto' }}>
      <li><a style={styleLink} href='https://github.com/fullstack-development/front-end-best-practices'>Front-end best practices</a>
      </li>
      <li><a style={styleLink} href='https://ru.bem.info/methodology/quick-start/'>БЭМ</a>
      </li>
      <li><a style={styleLink} href='https://leonidlebedev.github.io/javascript-airbnb/'>Airbnb practices</a>
      </li>
      <li><a style={styleLink} href='https://habr.com/ru/companies/first/articles/685054/'>Любопытные CSS фишки 2022 года</a>
      </li>
      <li><a style={styleLink} href='https://refactoring.guru/ru/design-patterns/catalog'>Каталог паттернов проектирования</a>
      </li>
      <li><a style={styleLink} href='https://validator.w3.org/'>Validator</a>
      </li>
      <li><a style={styleLink} href='https://github.com/yoksel/common-words'>Часто используемые слова в CSS</a>
      </li>
      <li><a style={styleLink} href='https://blog.boot.dev/clean-code/line-breaks-vs-code-lf-vs-crlf/'>FIX END OF LINE CHARACTER IS INVALID (LF VS CRLF)</a>
      </li>
      <li><a style={styleLink} href='https://htmlweb.ru/html/symbols.php'>Спец символы (html-код, десятичный код)</a>
      </li>
      <li><a style={styleLink} href='https://bennettfeely.com/clippy/'>CSS clip-path maker</a>
      </li>
      <li><a style={styleLink} href='https://app.netlify.com/start'>Deploy netlify</a>
      </li>
      <li><a style={styleLink} href='https://codepen.io/sosuke/pen/Pjoqqp'>Color to filter css converter</a>
      </li>
      <li><a style={styleLink} href='https://github.com/react-hook-form/react-hook-form/tree/master/examples'>react-hook-form component examples</a>
      </li>
    </ul>
  );
};

export default DataLinkLibrary;
