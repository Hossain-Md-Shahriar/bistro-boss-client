const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="w-full h-full object-cover" />
      </figure>
      <p className="bg-black/60 text-white font-medium absolute right-2 top-2 px-3 rounded-full">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-500 text-orange-500">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
