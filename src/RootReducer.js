import { combineReducers, createStore } from "redux";
import booksList from "./pages/BooksList/BooksList.reducers";
import bookDetails from "./pages/BookDetails/BookDetails.reducer";
import characterDetails from "./pages/CharactersDetails/CharactersDetails.reducer";

const RootReducer = combineReducers({
    booksList,
    bookDetails,
    characterDetails,
});

export const store = createStore(RootReducer);
