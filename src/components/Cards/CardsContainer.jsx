// Bootstrap
import CardGroup from "react-bootstrap/CardGroup";

// Components
import CardComp from "../CardComp/CardComp";

/* =================================================*/

/* =================================================*/

function CardsContainer(props) {
    const { characters, onClose } = props;
    return (
        <CardGroup className="justify-content-center">
            {characters.length > 0 &&
                characters.map((char) => (
                    <CardComp key={char.id} char={char} onClose={onClose} />
                ))}
        </CardGroup>
    );
}

export default CardsContainer;
