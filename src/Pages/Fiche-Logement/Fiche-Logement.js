import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Fiche-Logement.scss';
import data from '../../Data/logement.json'; 

const FicheLogement = () => {
  const { id } = useParams(); // récupère l'ID depuis l'URL
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // recherche le logement correspondant dans les données importées
    const logementData = data.find(logement => logement.id === id);

    if (logementData) {
      setLogement(logementData);
      setLoading(false); // indique que le chargement est terminé
    } else {
      setError("Logement non trouvé.");
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {logement ? (
        <div>
          <h1>{logement.titre}</h1>
          <p>{logement.description}</p>
        </div>
      ) : (
        <p>Aucun logement trouvé.</p>
      )}
    </div>
  );
};

export default FicheLogement;
