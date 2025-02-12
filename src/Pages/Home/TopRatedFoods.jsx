import React from 'react';
import OffersSection from './OffersSection';

const TopRatedFoods = () => {
    const topRated = [
        {
            _id: 1,
            foodName: "Sushi Platter",
            foodImg: "https://i.ibb.co.com/Df2spqm/360-F-902565520-yg97-QCFZ4-NOv-VXLb-JB1-Ai-Wg0-XEl-H5-WNN.jpg",
            price: 25.99,
            rating: 4.8,
        },
        {
            _id: 2,
            foodName: "Spaghetti Bolognese",
            foodImg: "https://i.ibb.co.com/YDx8C47/spaghetti-carbonara-01-500x500.jpg",
            price: 18.50,
            rating: 4.7,
        },
        {
            _id: 3,
            foodName: "Margherita Pizza",
            foodImg: "https://i.ibb.co.com/G5g55vY/Classic-Margherita-Pizza-with-Whole-Wheat-Pizza-Crust.jpg",
            price: 12.99,
            rating: 4.9,
        },
        {
            _id: 4,
            foodName: "Grilled Steak",
            foodImg: "https://i.ibb.co.com/wBMhdmX/wanna-have-steak-that.jpg",
            price: 35.00,
            rating: 5.0,
        },
        {
            _id: 5,
            foodName: "Caesar Salad",
            foodImg: "https://i.ibb.co.com/0qSTvKR/Caesar-Salad-w-Shrimp-FT-RECIPE0424-9b30a77ba2144a079db49c9eefd24976.jpg",
            price: 14.99,
            rating: 4.6,
        },
        {
            _id: 6,
            foodName: "Chocolate Cake",
            foodImg: "https://i.ibb.co.com/F63xDN2/classic-belgian-chocolate-cake.jpg",
            price: 8.99,
            rating: 4.8,
        },
    ];

    return (
        <div>
        <section className="bg-gradient-to-br from-gray-800 to-gray-600 py-16 text-white">
            <h2 className="text-4xl font-extrabold text-center mb-10">Top-Rated Foods</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
                {topRated.map((food) => (
                    <div
                        key={food._id}
                        className="rounded-lg shadow-xl bg-white overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={food.foodImg}
                            alt={food.foodName}
                            className="w-full h-64 object-cover object-center"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{food.foodName}</h3>
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-lg font-bold text-orange-600">${food.price}</p>
                                <p className="text-lg font-medium text-yellow-500">{'⭐ ' + food.rating}</p>
                            </div>
                            <button className="w-full py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors">
                                Order Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <OffersSection/>
        </div>
    );
};

export default TopRatedFoods;
