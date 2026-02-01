export default function FoodCard({ foodData }) {
  return (
    <>
      <a href={foodData?.action?.link}>
        <img
          className="w-40 h-40 sm:w-48 sm:h-48 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            foodData?.imageId
          }
        />
      </a>
    </>
  );
}
