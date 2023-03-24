// Styles
import styles from "./Nav.module.css";
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
        <div className={styles.container}>
            <Link to="/home">
                <img
                    src={logo}
                    alt="Rick And Morty App"
                    className={styles.logo}
                />
            </Link>
            <ul className={styles.menu}>
                <Link to="/home" className={styles.linkComp}>
                    <li className={styles.link}>Home</li>
                </Link>
                <Link to="/favorites" className={styles.linkComp}>
                    <li className={styles.link}>Favorites</li>
                </Link>
                <Link to="/About" className={styles.linkComp}>
                    <li className={styles.link}>About</li>
                </Link>
            </ul>
            <div className={styles.rightSection}>
                <div className={styles.cardCount}>{count} Cards</div>
                <SearchBar onSearch={onSearch} />
                <button
                    type="submit"
                    className={styles.logoutButton}
                    onClick={handleSubmit}
                >
                    Log Out
                </button>
            </div>
        </div>
    );
}

export default Nav;
