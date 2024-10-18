import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, name, image, price, recipe } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const { refetch } = useCart();

  const handleAddToCart = async () => {
    if (user && user.email) {
      // send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      try {
        const { data } = await axiosSecure.post("/carts", cartItem);
        console.log(data);
        // refetch data to show updated value
        refetch();
        Swal.fire({
          title: `${name} added to Cart`,
          icon: "success",
          showConfirmButton: false,
          timer: 1800,
        });
      } catch (err) {
        console.log(err.message);
      }
    } else {
      Swal.fire({
        title: "You must Login",
        icon: "warning",
        confirmButtonText: "Okay",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };
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
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-500 text-orange-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
