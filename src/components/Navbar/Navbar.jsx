import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import './Navbar.css'
import CartWidget from '../itemCart/CartWidget'
const Nabvar = () => {
  return (
    <>
      <ReactBootstrap.Navbar bg='dark' variant='dark'>
        <ReactBootstrap.Container>
          <ReactBootstrap.Navbar.Brand href='#home'>
            Ecomerce Coder house
          </ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Nav className='me-auto'>
            <ReactBootstrap.Nav.Link href='#features'>
              Productos
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href='#home'>Home</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href='#pricing'>
              Contacto
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
          <CartWidget />
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>
    </>
  )
}

export default Nabvar
