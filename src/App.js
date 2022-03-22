import "./App.css";
import { Route, Routes } from "react-router-dom";
import BooksList from "./pages/BooksList/BooksList";
import BookDetails from "./pages/BookDetails/BookDetails";
import CharactersDetails from "./pages/CharactersDetails/CharactersDetails";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="*" element={<p>404</p>} />
                <Route exact path="/" element={<BooksList />} />
                <Route path="/book/:id" element={<BookDetails />} />
                <Route path="/characters/:id" element={<CharactersDetails />} />
            </Routes>
        </div>
    );
}

export default App;
