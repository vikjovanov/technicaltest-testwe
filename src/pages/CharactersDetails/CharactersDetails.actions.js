const setCharacter = (character) => {
    return {
        type: SET_CHARACTER,
        payload: { character },
    };
};

export default {
    setCharacter,
};
export const SET_CHARACTER = "set.character";
