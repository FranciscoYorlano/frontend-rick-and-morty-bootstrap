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
        <div>
            <input
                type="search"
                placeholder="New card id.. (or random)"
                name="characterId"
                onChange={handleInputChange}
                value={characterId}
            />
            <button
                onClick={() => {
                    onSearch(characterId);
                    setCharacterId("");
                }}
            >
                Add
            </button>
        </div>
    );
}

export default SearchBar;
