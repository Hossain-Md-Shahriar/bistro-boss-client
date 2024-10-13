import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <section className="mb-24">
      {title && <Cover img={img} title={title} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="block mx-auto mt-6 btn btn-outline border-0 border-b-4">
        View Full Menu
      </button>
    </section>
  );
};

export default MenuCategory;
