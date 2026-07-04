import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <Header
        title="CineScope 🎬"
        subtitle="Search your favourite movies."
      />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <p>Searching for: {searchTerm}</p>
    </main>
  );
}

export default App;