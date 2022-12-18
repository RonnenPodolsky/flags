import Filter from './Filter';
import './Search.css';
import TextSearch from './TextSearch';

const Search = ({ filterCountries, changeRegion, setcountryToSearch, region }) => {
    return (
        <>
            <nav className='search-nav'>
                <TextSearch setcountryToSearch={setcountryToSearch} filterCountries={filterCountries}></TextSearch>
                <Filter region={region} filterCountries={filterCountries} changeRegion={changeRegion}></Filter>
            </nav>
        </>
    );
}

export default Search;