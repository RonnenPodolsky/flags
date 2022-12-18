import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import Search from './components/Search';


function App() {
  const [countries, setCountries] = useState([]);
  const [showCountries, setshowCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState('all');
  const [countryToSearch, setcountryToSearch] = useState('');


  const changeRegion = (e) => {
    setRegion(e.target.value.toLowerCase())
  }

  const filterCountries = () => {
    const filtered = countries.filter((c) => {
      
      const name = c[1].name.toLowerCase();
      const capital = c[1].capital.toLowerCase();
      const value = countryToSearch.toLowerCase()
      const countryRegion = c[1].region.toLowerCase();
      
      if (region === 'all') {
        return (name.includes(value) || capital.includes(value))
      }

      return (region === countryRegion && (name.includes(value) || (capital.includes(value))))

    })
    setshowCountries(filtered)
  }

  const getAllCountris = async () => {
    const data = await fetch('https://gist.githubusercontent.com/agamm/3578385792e08971a37bdf1db3115e31/raw/d892f1fbd0c15356d8e581008da735f057393a39/gistfile1.txt')
    const countries = await data.json()
    const countriesArray = Object.entries(countries)
    setCountries(countriesArray)
    setshowCountries(countriesArray)
    setLoading(false)
  }

  useEffect(() => {
    getAllCountris();
  }, [])

  useEffect(() => {
    filterCountries();
  }, [region, countryToSearch])

  if (loading) return <h1>loading...</h1>
  return (
    <div>
      <Search region={region} setcountryToSearch={setcountryToSearch} filterCountries={filterCountries} changeRegion={changeRegion}>
      </Search>
      <Countries countries={showCountries}></Countries>
    </div>
  );
};

export default App;
