export default function RestInfo({ restData }) {
    return (
       <div className="flex w-3xl justify-between mb-4 pb-4 border-b">

 
            <div className="w-[70%]">
                <p className="text-xl text-gray-800 font-semibold">
                    {restData?.name}
                </p>

                <p className="text-lg">
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

            <div className="w-32 relative flex justify-center">
                <img
                    className="w-32 h-32 object-cover rounded-xl"
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                        restData.imageId
                    }
                />

                <button className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-green-600 px-6 py-1.5 bg-white rounded-lg font-semibold shadow">
                    ADD
                </button>
            </div>
        </div>
    );
}
