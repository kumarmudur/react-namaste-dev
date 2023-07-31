import React from "react";

import RestaurantCard from './RestaurantCard';
const Body = () => {

    const onclickHandler = () => {

    };

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={onclickHandler}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                <RestaurantCard
                    resName="Meghana Foods"
                    cuisine="Biriyani, North Indian, Asian"
                />
                <RestaurantCard
                    resName="KFC"
                    cuisine="Burger, Fast Food"
                />
            </div>
        </div>
    )
};

export default Body;
