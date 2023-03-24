import logo from "../../assets/rick-and-morty.png";
// Component imports
import SearchBar from "../SearchBar/SearchBar";
// React router dom imports
import { Link } from "react-router-dom";
import { counter } from "@fortawesome/fontawesome-svg-core";

/* =================================================*/

/* =================================================*/

function Nav(props) {
    const { onSearch, count, logout } = props;

    const handleSubmit = (event) => {
        logout();
    };

    return (
        <nav className="bg-gray-800 text-white flex items-center justify-between p-6">
            <Link to="/home">
                <img src={logo} alt="Rick And Morty App" />
            </Link>
            <ul>
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/favorites">
                    <li>Favorites</li>
                </Link>
                <Link to="/About">
                    <li>About</li>
                </Link>
            </ul>
            <div>
                <div>{count} Cards</div>
                <SearchBar onSearch={onSearch} />
                <button type="submit" onClick={handleSubmit}>
                    Log Out
                </button>
            </div>
        </nav>
    );
}

export default Nav;
