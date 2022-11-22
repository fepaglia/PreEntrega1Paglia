import CartWidget from "./CartWidget"; // importamos el icono
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../src/assets/logoBV.jpg';



const MenuNavegacion = () => {
    return (
        <Navbar bg="light" expand="xl">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} width="80" className="d-inline-block align-top" alt=""></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Ofertas</Nav.Link>
                       
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Guitarras</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Amplificadores</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
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