import React, { useEffect, useState } from "react";
import './Homes.scss';
import Banner from '../../Components/Banner/Banner';
import banner from '../../Images/Image Banner.png';
import data from '../../Data/logement.json';
import Card from '../../Components/Card/Card';

function Home() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        // simule le chargement de données
        const fetchLogements = async () => {
            setLogements(data);
        };

        fetchLogements();
    }, []);

    // utilisation de map pour générer les cards en utilisant le composant Card
    const cards = logements.map((logement) => (
        <Card 
            key={logement.id}
            id={logement.id}
            title={logement.title}
            pictures={logement.pictures}
        />
    ));

    return (
        <div>
            <Banner img={banner} title="Chez vous, partout et ailleurs" />
            <div className="container">
                {cards}
            </div>
        </div>
    );
}

export default Home;
