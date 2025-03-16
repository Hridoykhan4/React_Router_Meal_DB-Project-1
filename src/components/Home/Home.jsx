import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { LifeLine } from "react-loading-indicators";

const Home = () => {
  const navigation = useNavigation();

  // const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen ">
      <header className=" bg-base-100 shadow-sm">
        <Header></Header>
      </header>
       <section className="w-11/12 mx-auto">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </section>
      <section className="w-11/12 grow mx-auto my-6">
        {navigation.state === "loading" ? (
          <LifeLine
            color="#3eba3e"
            size="large"
            text="Loading"
            textColor="#b41a1a"
          />
        ) : (
          <Outlet></Outlet>
        )}
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
