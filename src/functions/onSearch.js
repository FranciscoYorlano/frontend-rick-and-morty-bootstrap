// ENV
const API_URL = "http://localhost:3001";
const MIN_ID = 1;
const MAX_ID = 826;

const onSearchExt = async (id, characters) => {
    let error = "";

    if (characters.some((char) => char.id === Number(id))) {
        error = "ID ya esta en characters";
        console.log(error);
        return false;
    }

    if (characters.length >= MAX_ID) {
        error = "No existen más personajes";
        console.log(error);
        return false;
    }

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
            window.alert("API ERROR");
            return false;
        }
    }

    if (id < MIN_ID || id > MAX_ID) {
        console.log("Out");
        return false;
    }

    const response = await fetch(`${API_URL}/search/${id}`);
    const data = await response.json();

    if (data.name) {
        console.log(data);
        return data;
    } else {
        window.alert("API ERROR");
        return false;
    }
};

export default onSearchExt;
