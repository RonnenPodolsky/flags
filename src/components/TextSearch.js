import './TextSearch.css';

const TextSearch = ({ filterCountries, setcountryToSearch }) => {
    return (
        <input onChange={(e) => {setcountryToSearch(e.target.value)}} className="text_input" type="text" placeholder='Search for...' />
    );
}

export default TextSearch;