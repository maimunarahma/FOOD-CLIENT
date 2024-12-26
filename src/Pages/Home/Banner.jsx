import burger from "../../assets/images (9).jpeg";
import Featured from "./Featured";

const Banner = () => {
  return (
    <div className="mx-auto w-[90%] mt-24">
      <div className="carousel mx-auto overflow-hidden relative">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src='https://i.ibb.co.com/ftBJmt3/veggie-burger-with-lentil-patty-spicy-ketchup-1177965-129808.jpg'
            alt="Delicious Burger"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/NtgZCfq/maxresdefault.jpg"
            alt="Grilled BBQ Chicken"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/4KX9FzD/Featured-Grilled-BBQ-Chicken-1.jpg"
            alt="Featured Grilled BBQ Chicken"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="flex w-full justify-center gap-2 py-4">
        <a href="#slide1" className="btn btn-xs">1</a>
        <a href="#slide2" className="btn btn-xs">2</a>
        <a href="#slide3" className="btn btn-xs">3</a>
      </div>

      {/* Featured Section */}
      <Featured />
    </div>
  );
};

export default Banner;
