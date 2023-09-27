import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Meme from './pages/Meme';
import Error from './pages/Error';
import Contacts from './pages/Contacts';
import CodeLibrary from './pages/CodeLibrary'
import LinkLibrary from './pages/LinkLibrary'
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './index.css';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <Error />,
  },
  {
    path: "/codelibrary",
    element: <CodeLibrary />,
    errorElement: <Error />,
  },
  {
    path: "/linklibrary",
    element: <LinkLibrary />,
    errorElement: <Error />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
    errorElement: <Error />,
  },
  {
    path: "/meme",
    element: <Meme />,
    errorElement: <Error />,
  },
]);

const App = () => {

  return (
      <RouterProvider router={router} />
  );
}

export default App;
