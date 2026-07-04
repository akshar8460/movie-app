import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <main>
      <Header
       title="CineScope 🎬"
       subtitle="Search your favourite movies"
     />
      <SearchBar />
    </main>
  );
}

export default App;