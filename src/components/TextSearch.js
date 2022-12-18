import './TextSearch.css';

const TextSearch = ({ searchedCountry, setSearchedCountry }) => {
    return (
        <input valie={searchedCountry} onChange={(e) => {setSearchedCountry(e.target.value)}} className="text_input" type="text" placeholder='Search for...' />
    );
}

export default TextSearch;