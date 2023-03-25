// Components
import CardsContainer from "../CardsContainer/CardsContainer";
import CardComp from "../CardComp/CardComp";

/* =================================================*/

/* =================================================*/

function Home(props) {
    const { characters, onClose } = props;

    return <CardsContainer characters={characters} onClose={onClose} />;
}

export default Home;
