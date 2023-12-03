


import travel from "../travel.json";

const Data = () => {
    const travelData = travel;

    return (
        <div>
            <h1>Mina resor</h1>
            {travelData.map(destination => (
                <div className="card" key={destination.id}>
                    <h2>{destination.destination}</h2>
                    {destination.dates.map((date, index) => (
                        <p key={index}>✈️{date.month} {date.year}</p>
                    ))}
                    <p>{destination.description}</p>
                    <img src={require(`../../public/img/${destination.images}`)} alt="" />

                    <ul>
                        Highlights:{destination.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Data;

