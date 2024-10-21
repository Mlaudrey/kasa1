import React from "react";
import './Homes.scss';
import Banner from '../../Components/Banner/Banner';
import banner from '../../Images/Image Banner.png';

function Home() {
    return (
        <div>
            <Banner img={banner} title="Chez vous, partout et ailleurs" />
        </div>
    );
}

export default Home;
