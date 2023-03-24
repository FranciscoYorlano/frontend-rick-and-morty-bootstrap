import logo from "../../assets/rick-and-morty.png";
import { VscGithub } from "react-icons/vsc";

// Bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Component imports
import SearchBar from "../SearchBar/SearchBar";

// React router dom imports
import { Link } from "react-router-dom";

/* =================================================*/

/* =================================================*/

function NavComp(props) {
    const { onSearch, count, logout } = props;

    const handleSubmit = (event) => {
        logout();
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Link to="/home">
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width="100"
                            className="d-inline-block align-top"
                            alt="Rick And Morty App"
                        />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link>
                            <Link to="/home">Home</Link>
                        </Nav.Link>

                        <Nav.Link href="#action2">
                            <Link to="/About">About</Link>
                        </Nav.Link>

                        <NavDropdown
                            title="UserName"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item>{count} Cards</NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link to="/Home">My Cards</Link>
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link to="/favorites">Favorites</Link>
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link disabled>Create Card</Nav.Link>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item>
                                <Button
                                    variant="danger"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Logout
                                </Button>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            href="https://github.com/FranciscoYorlano"
                            target="_blank"
                        >
                            <VscGithub />
                        </Nav.Link>
                    </Nav>
                    <SearchBar onSearch={onSearch} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavComp;
