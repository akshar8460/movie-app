import {useState} from "react";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <section>
            <input 
            type = "text" 
            placeholder = "Search for a movie..." 
            value = {searchTerm}
            onChange = {handleChange}
            />
            <button> Search </button>
        
        <p>You typed: {searchTerm}</p>
        </section>
    );
}

export default SearchBar;