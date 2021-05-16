import styled from 'styled-components';
// bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const StyledBrand = styled.p`
    font-family: 'Permanent Marker', cursive;
    font-size: 30px;
`;

const StyledNavLink = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 19px;
`;

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
                <StyledBrand>STATE YOUR CASE</StyledBrand>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="app-nav" />
            <Navbar.Collapse id="app-nav" className="justify-content-end">
                <Nav className="ml-auto">
                    <Nav.Link href="about">
                        <StyledNavLink>About</StyledNavLink>
                    </Nav.Link>
                    <Nav.Link href="/">
                        <StyledNavLink>Schools</StyledNavLink>
                    </Nav.Link>
                    <Nav.Link href="resources">
                        <StyledNavLink>Resources</StyledNavLink>
                    </Nav.Link>
                    <Nav.Link href="auth">
                        <StyledNavLink>Join With An Account</StyledNavLink>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
