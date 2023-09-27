import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const DataCodeLibrary = () => {
  return (
    <Container className='d-flex flex-column gap-3 position-relative p-0 m-0'>
      <Card
        style={{ width: 'auto', maxWidth: '2480px', paddingTop: '25px' }}
        className='border-0 px-4'
      >
        <Card.Title>Кастомный react-query хук на получение данных.</Card.Title>
        <Card.Text>
          {' '}
          useQuery принимает 3 аргумента, ['ключ', параметр], запрос,{' '}
          {`{параметры}`}.
        </Card.Text>
        <Card.Body>
          <pre className='pre'>
            <code className='code'>
              {`export const useGetUsersList = (pageable: IGetUsersList) => {
  const state = useQuery(
    ['profilesList', pageable],
    async () => {
      const response = await getUsersList(pageable);
      return response.data;
    },
    {
      onSuccess() {
        console.log('SUCCESS - user list received');
      },
      onError(error) {
        console.log('ERROR - user list NOT received', error);
      },
    }
  );
  return state;
};

// использование в целевом компоненте
//const { data } = useGetUsersList(pageable)
`}
            </code>
          </pre>
        </Card.Body>
      </Card>

      <Card
        style={{ width: 'auto', maxWidth: '2480px', paddingTop: '25px' }}
        className='border-0 px-4'
      >
        <Card.Title>Q: Как переписать стили в Material-UI в ручную?</Card.Title>
        <Card.Text>(Синтаксис внутри компонента)</Card.Text>
        <Card.Body>
          <pre className='pre'>
            <code className='code'>
              {`sx={{
  '& .MuiTabs-flexContainer': {
    display: 'flex',
    flexWrap: 'wrap',
  },
}}`}
            </code>
          </pre>
        </Card.Body>
      </Card>

      <Card
        style={{ width: 'auto', maxWidth: '2480px', paddingTop: '25px' }}
        className='border-0 px-4'
      >
        <Card.Title>
          Q: NextJS Error: hostname is not configured under images in your
        </Card.Title>
        <Card.Text>
          {' '}
          <code>next.config.js</code>{' '}
        </Card.Text>
        <Card.Link
          className='m-0'
          href='https://github.com/vercel/next.js/discussions/18311'
        >
          Github discussion
        </Card.Link>
        <Card.Link
          className='m-0'
          href='https://nextjs.org/docs/messages/next-image-unconfigured-host'
        >
          Documentation
        </Card.Link>
        <Card.Body>
          <pre className='pre'>
            <code className='code'>
              {`module.exports = {
  images: {
    domains: ['example.com'],
    formats: ['image/avif', 'image/webp'],
  },
}`}
            </code>
          </pre>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DataCodeLibrary;
