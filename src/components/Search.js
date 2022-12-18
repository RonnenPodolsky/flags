import Filter from './Filter';
import './Search.css';
import TextSearch from './TextSearch';

const Search = ({ searchedCountry, setSearchedCountry, region, setRegion }) => {
    return (
        <>
            <nav className='search-nav'>
                <TextSearch searchedCountry={searchedCountry} setSearchedCountry={setSearchedCountry}></TextSearch>
                <Filter region={region} setRegion={setRegion}></Filter>
            </nav>
        </>
    );
}

export default Search;