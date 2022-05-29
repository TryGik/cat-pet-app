import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container >
                <Nav className="me-auto">
                    <Link to="/"><div className='btn active'>Все котики</div></Link>
                    <Link to="/favorite"><div className='btn'>Любимые котики</div></Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;