import React, { useEffect, useState } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import './Fiche-Logement.scss';
import data from '../../Data/logement.json'; 

const FicheLogement = () => {
  const { id } = useParams(); // récupère l'ID depuis l'URL
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // pour la navigation

  useEffect(() => {
    // recherche le logement correspondant dans les données importées
    const logementData = data.find(logement => logement.id === id);

    if (logementData) {
      setLogement(logementData);
      setLoading(false); 
    } else {
      
      navigate('/NotFound');
    }
  }, [id, navigate]); 

  if (loading) return <div>Chargement...</div>;

  return (
    <div>
      {logement ? (
        <div>
          <h1>{logement.titre}</h1>
          <p>{logement.description}</p>
        </div>
      ) : null} {/* si le logement n'est pas trouvé, rien n'est affiché ici */}
    </div>
  );
};

export default FicheLogement;
