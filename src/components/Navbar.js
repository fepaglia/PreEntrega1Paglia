import CartWidget from "./CartWidget"; // importamos el icono
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const MenuNavegacion = () => {
    return (
        <Navbar bg="success" expand="xl">
            <Container>
                <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Ofertas</Nav.Link>
                       
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Categoria1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Categoria2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Categoria3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Todos los productos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav.Link href="#link">
                        <CartWidget />
                    </Nav.Link>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default MenuNavegacion;