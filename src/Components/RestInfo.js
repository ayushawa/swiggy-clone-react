import { useDispatch, useSelector } from "react-redux";
import { addItems, IncrementItems, DecrementItems } from "../Stored/CartSlicer";

export default function RestInfo({ restData }) {
  const dispatch = useDispatch();

  const items = useSelector(state => state.cartslice.items);
  const element = items.find(item => item.id === restData.id);
  const count = element ? element.quantity : 0;

  function handleAdditems() {
    dispatch(addItems(restData));
  }

  function handleIncrementItems() {
    dispatch(IncrementItems(restData));
  }

  function handleDecrementItems() {
    dispatch(DecrementItems(restData));
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between mb-4 pb-4 border-b gap-4">
      <div className="w-full sm:w-[70%]">
        <p className="text-lg sm:text-xl text-gray-800 font-semibold">
          {restData?.name}
        </p>

        <p className="text-base sm:text-lg">
          ₹{(restData?.price ?? restData?.defaultPrice) / 100}
        </p>

        {restData?.ratings?.aggregatedRating?.ratingCountV2 && (
          <>
            <span className="text-sm text-gray-600">
              {restData.ratings.aggregatedRating.rating}
            </span>
            <span className="text-sm text-gray-600">
              {" (" + restData.ratings.aggregatedRating.ratingCountV2 + ")"}
            </span>
          </>
        )}
      </div>

      <div className="w-full sm:w-32 relative flex justify-center">
        {restData?.imageId && (
          <img
            className="w-32 h-32 object-cover rounded-xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              restData.imageId
            }
            alt={restData?.name}
          />
        )}

        {count === 0 ? (
          <button
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-green-600 px-6 py-1.5 bg-white rounded-lg font-semibold shadow"
            onClick={handleAdditems}
          >
            ADD
          </button>
        ) : (
          <div className="flex absolute gap-2 -bottom-4 left-1/2 -translate-x-1/2 text-green-600 px-6 py-1.5 bg-white rounded-lg font-semibold shadow">
            <button onClick={handleDecrementItems}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrementItems}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

