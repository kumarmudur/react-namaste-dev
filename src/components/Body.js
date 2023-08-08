import React, {useEffect, useState} from "react";

import RestaurantCard from './RestaurantCard';
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    const onclickHandler = () => {

    };

    useEffect(() => {
        console.log('useEffect called');
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9314583&lng=77.6299858&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING\n');
        const json = await data.json();

        setListOfRestaurants((json));
    };

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    const onChangeHandler = (event) => setSearchText(event.target.value);

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" onChange={onChangeHandler} />
                    <button>Search</button>
                </div>
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
