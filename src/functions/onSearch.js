// ENV
const API_URL = "http://localhost:3001";
const MIN_ID = 1;
const MAX_ID = 826;

const onSearchExt = async (id, characters) => {
    let error = "";

    if (characters.some((char) => char.id === Number(id))) {
        error = "The character you are trying to add is already in your cards";
        return error;
    }

    if (characters.length >= MAX_ID) {
        error = "There are no more characters to add";
        return error;
    }

    // Random ID function
    if (!id) {
        let randomId;
        do {
            randomId = Math.floor(Math.random() * MAX_ID) + 1;
        } while (characters.some((char) => char.id === randomId));
        const response = await fetch(`${API_URL}/search/${randomId}`);
        const data = await response.json();

        if (data.name) {
            return data;
        } else {
            error =
                "The character cannot be loaded at this time. Try again in a few minutes";
            return error;
        }
    }

    if (id < MIN_ID || id > MAX_ID) {
        error = " Please enter a valid ID";
        return error;
    }

    const response = await fetch(`${API_URL}/search/${id}`);
    const data = await response.json();

    if (data.name) {
        return data;
    } else {
        error =
            "The character cannot be loaded at this time. Try again in a few minutes";
        return error;
    }
};

export default onSearchExt;
