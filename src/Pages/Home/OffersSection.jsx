import NutritionSection from "./NutritionSection";

const OffersSection = () => {
    return (
        <div>
        <div className="bg-red-100 py-12 text-center">
            <h2 className="text-3xl font-bold text-red-600">🔥 Special Offers & Discounts 🔥</h2>
            <p className="mt-2 text-lg">Grab the best deals before they're gone!</p>

            <div className="grid md:grid-cols-3 gap-6 mt-6 mx-auto w-[80%]">
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold">🍕 Buy 1 Get 1 Free</h3>
                    <p>On all large pizzas - Limited Time!</p>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold">🥗 20% Off Healthy Meals</h3>
                    <p>Enjoy fresh salads & organic bowls.</p>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold">🍔 Flat 15% Off</h3>
                    <p>On orders above $30 - Use code: FOOD15</p>
                </div>
            </div>

        </div>
        <NutritionSection/>
        </div>
    );
};

export default OffersSection;
