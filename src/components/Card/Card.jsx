// Styles
import styles from "./Card.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Actions to dispatch
import { addFavorite, removeFavorite } from "../../redux/actions";
// Hooks
import { useEffect, useState } from "react";
// React router dom
import { Link } from "react-router-dom";
import { connect } from "react-redux";
/* =================================================*/

/* =================================================*/

function Card(props) {
    const { char, onClose, favoritesCards, addFavorite, removeFavorite } =
        props;

    // States
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        favoritesCards.forEach((favCard) => {
            if (favCard.id === char.id) {
                setIsFav(true);
            }
        });
    }, []);

    // Functions
    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false);
            removeFavorite(char.id);
        } else {
            setIsFav(true);
            addFavorite(char);
        }
    };

    return (
        <div className={styles.card}>
            <div className="cardHeader">
                <button
                    className={styles.cardButton}
                    onClick={() => onClose(char.id)}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                {isFav ? (
                    <button
                        className={styles.cardButton}
                        onClick={handleFavorite}
                    >
                        ❤️
                    </button>
                ) : (
                    <button
                        className={styles.cardButton}
                        onClick={handleFavorite}
                    >
                        🤍
                    </button>
                )}
            </div>
            <h2>{char.name}</h2>
            <h3>{char.species}</h3>
            <h3>{char.gender}</h3>
            <Link to={`/detail/${char.id}`}>
                <img src={char.image} alt={char.name} />
            </Link>
            <span>Touch the image to go to detail</span>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        favoritesCards: state.favoritesCards,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFavorite: (char) => dispatch(addFavorite(char)),
        removeFavorite: (id) => dispatch(removeFavorite(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
