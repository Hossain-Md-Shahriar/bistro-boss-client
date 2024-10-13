import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title={"our menu"} />
      <SectionTitle subHeading={"Popular Items"} heading={"from our menu"} />

      {/* offered menu items */}
      <MenuCategory items={offered} />

      {/* dessert menu items */}
      <MenuCategory items={dessert} title={"Desserts"} img={dessertImg} />

      {/* pizza menu items */}
      <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg} />

      {/* soup menu items */}
      <MenuCategory items={soup} title={"Soup"} img={soupImg} />

      {/* salad menu items */}
      <MenuCategory items={salad} title={"Salad"} img={saladImg} />
    </div>
  );
};

export default Menu;