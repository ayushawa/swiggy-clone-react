import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function RestHeader() {
  const counter = useSelector(state => state.cartslice.count);

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="w-[95%] sm:w-[90%] mx-auto h-16 sm:h-20 flex justify-between items-center">
        <p className="text-orange-600 font-bold text-xl sm:text-2xl cursor-pointer">
          Swiggy
        </p>

        <div className="flex items-center gap-4 sm:gap-8 text-sm font-medium text-gray-700">
          <p className="hidden sm:block cursor-pointer">Search</p>
          <p className="hidden sm:block cursor-pointer">Offers</p>
          <p className="hidden sm:block cursor-pointer">Help</p>
          <p className="hidden sm:block cursor-pointer">Sign In</p>

          <Link to="/Checkout" className="flex items-center gap-1">
            <p>Cart</p>
            <p className="text-green-600 font-semibold">
              ({counter})
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

