import './Card.css';


const Card = ({ title, population, region, capital, flag }) => {
    return (
        <div className="card">
            <img src={flag} alt="" />
            <h1>{title}</h1>
            <p>population: {population}</p>
            <p>region: {region}</p>
            <p>capital: {capital}</p>
        </div>
    );
}

export default Card;