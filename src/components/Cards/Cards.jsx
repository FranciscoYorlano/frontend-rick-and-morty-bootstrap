// Components
import Card from "../Card/Card";

/* =================================================*/

/* =================================================*/

function Cards(props) {
    const { characters, onClose } = props;
    return (
        <div>
            {characters.length > 0 &&
                characters.map((char) => (
                    <Card key={char.id} char={char} onClose={onClose} />
                ))}
        </div>
    );
}

export default Cards;
