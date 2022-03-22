const getBooks = async () => {
    const rep = await fetch("https://anapioficeandfire.com/api/books");
    return rep.json();
};

const getBook = async (id) => {
    const rep = await fetch(`https://anapioficeandfire.com/api/books/${id}`);
    return rep.json();
};

const getCharacter = async (id) => {
    const rep = await fetch(
        `https://anapioficeandfire.com/api/characters/${id}`
    );
    return rep.json();
};

const get = async (url) => {
    const rep = await fetch(url);
    return rep.json();
};

export default {
    getBooks,
    getBook,
    getCharacter,
    get,
};
