// Bootstap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Hooks
import { useState } from "react";

/* =================================================*/

/* =================================================*/

function SearchBar(props) {
    // Props
    const { onSearch } = props;

    // State
    const [characterId, setCharacterId] = useState("");

    // Handlers
    const handleInputChange = (event) => {
        setCharacterId(event.target.value);
    };

    return (
        <Form className="d-flex ">
            <Form.Control
                type="search"
                placeholder="Card id.. (or random)"
                name="characterId"
                onChange={handleInputChange}
                value={characterId}
                className="me-2"
                aria-label="Search"
            />
            <Button
                variant="outline-success"
                onClick={() => {
                    onSearch(characterId);
                    setCharacterId("");
                }}
            >
                Add
            </Button>
        </Form>
    );
}

export default SearchBar;
