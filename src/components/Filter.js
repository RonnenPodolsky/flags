import './Filter.css';

const Filter = ({ region, setRegion }) => {
    return (
        <select vale={region} onChange={(e) => setRegion(e.target.value.toLowerCase())} className="filter_search" placeholder='Filter by region' >
            <option value="all">Filter by region</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
        </select >
    );
}

export default Filter;