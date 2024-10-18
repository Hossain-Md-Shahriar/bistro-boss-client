import { NavLink, Outlet } from "react-router-dom";
import {
  MdCalendarMonth,
  MdHome,
  MdList,
  MdMenuBook,
  MdOutlineShoppingCart,
  MdReviews,
} from "react-icons/md";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const { cart } = useCart();
  return (
    <div>
      {/* dashboard sidebar */}
      <div className="fixed top-0 left-0 w-64 p-2 pt-6 h-screen bg-orange-400 overflow-y-auto">
        <div className="flex justify-center mb-8">
          <span className="text-3xl font-semibold">Bistro Boss</span>
        </div>
        <ul className="menu space-y-2">
          <li>
            <NavLink to="/dashboard/user-home">
              <MdHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <MdCalendarMonth /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <MdOutlineShoppingCart /> My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <MdReviews /> Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <MdList /> My Bookings
            </NavLink>
          </li>
          <div className="divider" />
          <li>
            <NavLink to="/">
              <MdHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <MdMenuBook /> Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="ml-64 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
