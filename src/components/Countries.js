import Card from './Card';
import './Countries.css';

const Countries = ({ countries }) => {
    return (
        <>
            <h1>Countries</h1>

            <div className='countries'>
                {countries.map((c) => {
                    return <Card
                        title={c[1].name}
                        flag={c[1].flag.large}
                        population={c[1].population}
                        capital={c[1].capital}
                        region={c[1].region}
                        key={c[0]}
                    />
                })}
            </div>
        </>

    );
}

export default Countries;