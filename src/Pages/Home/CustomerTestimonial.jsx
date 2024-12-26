import TopRatedFoods from "./TopRatedFoods";

const CustomerTestimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            feedback:
                "The food was absolutely amazing! The delivery was on time, and the taste was delightful.",
            image: "https://i.ibb.co.com/1T8LyS7/Whitecub.webp",
        },
        {
            id: 2,
            name: "Jane Smith",
            feedback:
                "Great service and even better food! Highly recommend their chocolate cake.",
            image: "https://i.ibb.co.com/3ypMqwM/istockphoto-1435606115-612x612.jpg",
        },
        {
            id: 3,
            name: "Alex Johnson",
            feedback:
                "I love how fresh and flavorful everything is. Will definitely order again!",
            image: "https://i.ibb.co.com/PwrMxGn/images.jpg",
        },
    ];

    return (

    <div>
              <section className="bg-white py-8">
            <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="rounded-lg shadow-lg bg-gray-100 p-6 text-center"
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="mx-auto rounded-full w-20 h-20 mb-4"
                        />
                        <p className="italic text-gray-700">{testimonial.feedback}</p>
                        <h4 className="mt-4 font-bold text-gray-900">{testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
        <TopRatedFoods></TopRatedFoods>

    </div>
  
    );
};

export default CustomerTestimonials;
