import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavTop.css";

function NavTop() {
    return (
        <>
            <Navbar className="navtop py-3">
                <Container fluid className="px-4">
                <Navbar.Brand className="navtop-brand" href="#home">Syaf<i id="normal">wan</i>.</Navbar.Brand>
                    <Nav className="navtop-list ms-auto">
                        <Nav.Link className="pe-3"><NavLink to="/" activeClassName="active">Home</NavLink></Nav.Link>
                        <Nav.Link className="pe-3"><NavLink to="/about" activeClassName="active">About</NavLink></Nav.Link>
                        <Nav.Link className="pe-3"><NavLink to="/skills" activeClassName="active">Skills</NavLink></Nav.Link>
                        <Nav.Link className="pe-3"><NavLink to="/projects" activeClassName="active">Projects</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/contact" activeClassName="active">Contact</NavLink></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavTop;