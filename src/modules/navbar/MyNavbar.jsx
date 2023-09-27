import React from 'react';
import { Link } from 'react-router-dom'
import { ThemeContext, themes } from '../../contexts/ThemeContext'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { ReactComponent as DarkModeSWG } from '../../assets/icons/svg/DarkMode.svg';
const MyNavbar = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <Navbar collapseOnSelect expand='sm' className="bg-body-tertiary px-3">
          <Navbar.Brand><Link className="dropdown-item" to={'/'}>Resume</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to='/'>Home</Link>
              <Link className="nav-link" to='https://github.com/NaN-Simon'>GitHub</Link>
              <Link className="nav-link" to='/projects'>Projects</Link>
              <Link className="nav-link" to='/contacts'>Contacts</Link>
              <NavDropdown title="Library" id="basic-nav-dropdown">
                <Link className="dropdown-item" style={{width: 'auto'}} to={'/codelibrary'}>CodeLibrary</Link>
                <Link className="dropdown-item" style={{width: 'auto'}} to={'/linklibrary'}>LinkLibrary</Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" style={{width: 'auto'}} to={'/meme'}>Meme</Link>
                <NavDropdown.Item label='asd' disabled href="#action/3.2">Disabled</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form className='d-flex border border-dark rounded-pill' style={{padding: '0 5px'}}>
            <Form.Check
              type="switch"
              id="custom-switch"
              checked={theme === themes.dark}
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark)
                if (theme === themes.dark) setTheme(themes.light)
              }}/>
            <label htmlFor='custom-switch' > <DarkModeSWG/> </label>
          </Form>
        </Navbar>
      )}
    </ThemeContext.Consumer>
  );

};

export default MyNavbar;
