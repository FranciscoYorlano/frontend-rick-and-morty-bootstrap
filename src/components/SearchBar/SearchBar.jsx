// Styles
import styles from "./SearchBar.module.css";
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
        <div className={styles.searchContainer}>
            <input
                type="search"
                className={styles.searchInput}
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
                className={styles.searchButton}
            >
                Add
            </button>
        </div>
    );
}

export default SearchBar;
