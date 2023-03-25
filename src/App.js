// Styles
import "./App.css";

// Bootstrap
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

// Component imports
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavComp from "./components/NavComp/NavComp";
import NotFound from "./components/NotFound/NotFound";

// Hooks imports
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// React route dom imports
import { Route, Routes, Navigate } from "react-router-dom";

// Functions
import onSearchExt from "./functions/onSearch";

// React redux
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "./redux/actions";

/* =================================================*/
// Fake credencials
const adminEmail = "admin@gmail.com";
const adminPassword = "admin123";

/* =================================================*/

function App(props) {
    // States
    const [characters, setCharacters] = useState([]);
    const [access, setAccess] = useState(false);
    const [error, setError] = useState("");

    // Var
    const navigate = useNavigate();
    let counter = characters.length;

    useEffect(() => {
        !access && navigate("/login");
    }, []);

    // Functions
    const login = (userCredentials) => {
        const { email, password } = userCredentials;

        if (email === adminEmail && password === adminPassword) {
            setAccess(true);
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setAccess(false);
        navigate("/login");
    };

    const onSearch = (id) => {
        onSearchExt(id, characters).then((data) => {
            if (data.name) {
                setCharacters([...characters, data]);
            } else {
                setError(data);
            }
        });
    };

    const onClose = (id) => {
        props.removeFavorite(id);
        setCharacters(characters.filter((char) => char.id !== id));
    };

    // Render
    return (
        <>
            {useLocation().pathname !== "/login" && (
                <NavComp onSearch={onSearch} logout={logout} count={counter} />
            )}

            <Container
                fluid
                className="justify-content-md-center text-center w-100"
                style={{ minHeight: "100vh" }}
            >
                <Routes>
                    <Route
                        path="/home"
                        element={
                            <Home characters={characters} onClose={onClose} />
                        }
                    />
                    <Route
                        path="/favorites"
                        element={<Favorites onClose={onClose} />}
                    />
                    <Route exact path="/" element={<Navigate to="/home" />} />
                    <Route path="/login" element={<Login login={login} />} />
                    <Route path="/about" element={<About />} />

                    <Route path="/detail/:detailId" element={<Detail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        addFavorite: (char) => dispatch(addFavorite(char)),
        removeFavorite: (id) => dispatch(removeFavorite(id)),
    };
};

export default connect(null, mapDispatchToProps)(App);

// <div>{error && <Alert variant="danger">{error}</Alert>}</div>
