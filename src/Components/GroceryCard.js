export default function GroceryCard({ grocery }) {
  return (
    <div className="shrink-0 w-32 sm:w-40 flex flex-col items-center">
      <a href={grocery?.action?.link}>
        <img
          className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            grocery?.imageId
          }
          alt=""
        />
      </a>
      <h2 className="mt-2 text-center text-sm font-bold">
        {grocery?.action?.text}
      </h2>
    </div>
  );
}

