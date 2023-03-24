// styles
import styles from "./Cards.module.css";
// Components
import Card from "../Card/Card";

/* =================================================*/

/* =================================================*/

function Cards(props) {
    const { characters, onClose } = props;
    return (
        <div className={styles.cardsContainer}>
            {characters.length > 0 &&
                characters.map((char) => (
                    <Card key={char.id} char={char} onClose={onClose} />
                ))}
        </div>
    );
}

export default Cards;
