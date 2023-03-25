// Bootstrap
import CardGroup from "react-bootstrap/CardGroup";

// Styles
import styles from "./CardsContainer.module.css";

// Components
import CardComp from "../CardComp/CardComp";

/* =================================================*/

/* =================================================*/

function CardsContainer(props) {
    const { characters, onClose } = props;
    return (
        <CardGroup>
            {characters.length > 0 &&
                characters.map((char) => (
                    <CardComp
                        key={char.id}
                        char={char}
                        onClose={onClose}
                        className={styles.card}
                    />
                ))}
        </CardGroup>
    );
}

export default CardsContainer;
