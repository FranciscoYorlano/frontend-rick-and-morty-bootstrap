// Components
import CardsContainer from "../Cards/CardsContainer";

/* =================================================*/

/* =================================================*/

function Home(props) {
    const { characters, onClose } = props;

    return (
        <>
            <CardsContainer characters={characters} onClose={onClose} />
        </>
    );
}

export default Home;
