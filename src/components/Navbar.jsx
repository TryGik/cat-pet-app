import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const category = [{ title: 'Все котики', path: '/' }, { title: 'Любимые котики', path: '/favorite' }];
    const [selectCatagory, setSelectCatagory] = React.useState(0);

    const changeCategory = (index) => {
        setSelectCatagory(index);
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container >
                <Nav className="me-auto">
                    {category && category.map((item, i) =>
                        <Link to={item.path} key={item + i}>
                            <div
                                className={`btn ${selectCatagory === i ? 'active' : ''}`}
                                onClick={() => changeCategory(i)}
                            >{item.title}</div>
                        </Link>
                    )}

                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;