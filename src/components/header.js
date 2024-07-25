
import { Nav, Navbar } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";  //it will be used like a link because react-bootstrap dont know about link

const Header = ()=>{

    return(
        <>
            <div className="container">

                <Navbar className="yellotail">
                    <LinkContainer to={'/'}>
                    
                    <Navbar.Brand>The Daily News</Navbar.Brand>

                    </LinkContainer>
                </Navbar>

                <Nav>
                    <Nav.Item>
                        <LinkContainer to={'/'}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>

                    <Nav.Item>
                        <LinkContainer to={'contact'}>
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                </Nav>

            </div>
        </>
    )
}

export default Header;