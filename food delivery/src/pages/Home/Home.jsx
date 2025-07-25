import React from "react";
import './Home.css';
import Header from '../../Components/Navbar/Header/Header';
import ExploreMenu from '../../Components/Navbar/ExploreMenu/ExploreMenu';

const Home = () => {
    return (
        <div>
            <Header />
            <ExploreMenu/>
        </div>
    );
}

export default Home;
