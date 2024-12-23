
import burger from "../../assets/images (9).jpeg"
import Featured from "./Featured";

const Banner=()=>{
  return  (
    <div className="w-[90%] mx-auto">
<div className="carousel ">
  <div id="item1" className="carousel-item w-[1100px] h-[600px] mx-auto">
    <img
      src={burger}
      className="w-full" />
  </div>
  <div id="item2"  className="carousel-item w-[1100px] h-[600px]">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
  </div>
  <div id="item3"  className="carousel-item w-[1100px] h-[600px]">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
  </div>
  
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>

</div>
<Featured></Featured>
    </div>

  );
};

export default Banner;
