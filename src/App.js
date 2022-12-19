import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import Search from './components/Search';


function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState('all');
  const [searchedCountry, setSearchedCountry] = useState('');

  const filterCountries = () => {
    const filtered = countries.filter((c) => {
      const name = c[1].name.toLowerCase();
      const capital = c[1].capital.toLowerCase();
      const value = searchedCountry.toLowerCase()
      const countryRegion = c[1].region.toLowerCase();
      const countryIncluedsSearchTerm = name.includes(value) || capital.includes(value)
      const countryInRegion = region === countryRegion
      if (region === 'all') {
        return countryIncluedsSearchTerm;
      }
      return (countryInRegion && countryIncluedsSearchTerm);
    })
    return filtered;
  }

  const cuntriesToShow = filterCountries();

  const getAllCountris = async () => {
    const data = await fetch('https://gist.githubusercontent.com/agamm/3578385792e08971a37bdf1db3115e31/raw/d892f1fbd0c15356d8e581008da735f057393a39/gistfile1.txt')
    const countries = await data.json()
    const countriesArray = Object.entries(countries)
    setCountries(countriesArray)
    setLoading(false)
  }

  useEffect(() => {
    getAllCountris();
  }, [])

  if (loading) return <h1>loading...</h1>
  return (
    <div>
      <Search searchedCountry={searchedCountry} setSearchedCountry={setSearchedCountry} region={region} setRegion={setRegion}>
      </Search>
      <Countries countries={cuntriesToShow}></Countries>
    </div>
  );
};

export default App;
