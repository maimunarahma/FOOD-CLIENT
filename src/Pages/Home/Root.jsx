import { Outlet } from "react-router-dom";
import Nav from "../../Shared/Nav";
import Footer from "../../Shared/Footer";


const Root= () => {
    return (
        <div className="w-full mx-auto px-0">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
        </div>
    );
};

export default Root;