// Components
import CardsContainer from "../CardsContainer/CardsContainer";

/* =================================================*/

/* =================================================*/

function Cards(props) {
    const { characters, onClose } = props;

    return <CardsContainer characters={characters} onClose={onClose} />;
}

export default Cards;
