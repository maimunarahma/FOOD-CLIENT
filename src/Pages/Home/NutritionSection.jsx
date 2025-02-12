const NutritionSection = () => {
    return (
        <div className="bg-green-100 py-12 text-center">
            <h2 className="text-3xl font-bold text-green-600">🌿 Nutrition & Health Tips</h2>
            <p className="mt-2 text-lg">Eat better, feel better! Follow these healthy habits:</p>

            <div className="grid md:grid-cols-3 gap-6 mt-6 mx-auto w-[80%]">
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold">🥦 Eat More Greens</h3>
                    <p>Leafy vegetables boost immunity & energy.</p>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold">💧 Stay Hydrated</h3>
                    <p>Drink at least 8 glasses of water daily.</p>
                </div>
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold">🍓 Fresh Fruits Daily</h3>
                    <p>Fruits provide essential vitamins & fiber.</p>
                </div>
            </div>
        </div>
    );
};

export default NutritionSection;
