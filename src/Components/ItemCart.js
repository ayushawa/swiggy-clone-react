export default function ItemCart({ data }) {
  return (
    <div className="bg-gray-300 mt-3 w-full sm:w-[60%] md:w-[40%] lg:w-[25%] rounded-2xl px-3 py-3 shadow-md border border-gray-400">
      <p className="leading-6 text-gray-800">item Name : {data.name}</p>
      <p className="leading-6 text-gray-800">quantity : {data.quantity}</p>
      <p className="leading-6 text-gray-800">
        Total price : {(data.price / 100) * data.quantity}
      </p>
    </div>
  );
}

