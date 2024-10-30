import React, { useEffect, useState } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import './Fiche-Logement.scss';
import data from '../../Data/logement.json'; 
import Slideshow from '../../Components/Slideshow/Slideshow';
import Host from '../../Components/Host/Host';
import Rate from '../../Components/Rate/Rate';
import Tags from '../../Components/Tags/Tags';
import Collapse from '../../Components/Collapse/Collapse';

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
          
          {logement.pictures && logement.pictures.length > 0 && (
            <Slideshow pictures={logement.pictures} />
          )}
           <div className="title-host-container">
            {/* title et localisation */}
            <div className="title-location">
              <h1 className="logement-title">{logement.title}</h1>
              <p className="logement-location">{logement.location}</p>
            </div>

            <Host name={logement.host.name} picture={logement.host.picture} />
          </div>

          <div className="tags-rating-container">
            <Tags tags={logement.tags} />
            <Rate rating={logement.rating} />
          </div>

          <div className="collapse-container">
            <Collapse 
              type="description" 
              title="Description" 
              description={logement.description} 
            />
            <Collapse 
              type="equipments" 
              title="Équipements" 
              equipments={logement.equipments} 
            />
          </div>
        </div>
      ) : null} {/* si le logement n'est pas trouvé, rien n'est affiché ici */}
    </div>
  );
};

export default FicheLogement;
