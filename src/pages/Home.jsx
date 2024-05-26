import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import Sale from "../components/home/Sale";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Sale></Sale>
      <Products />
      <Accordian />
    </div>
  );
};

export default Home;
