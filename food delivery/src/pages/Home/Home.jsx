import { useState } from "react";
import './Home.css';
import Header from '../../Components/Navbar/Header/Header';
import ExploreMenu from '../../Components/Navbar/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import React from 'react';

const Home = () => {

    const[category,setCategory]=useState("All");
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category} />
        </div>
    );
}

export default Home;
