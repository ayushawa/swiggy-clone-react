import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#ff5200] overflow-hidden">
      <div className="w-full px-16 flex items-center justify-between h-20">
        <img
          className="h-11 w-auto"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt="Swiggy"
        />

        <nav className="hidden md:flex items-center gap-8 text-white font-bold">
          <a href="https://www.swiggy.com/corporate/" target="_blank">
            Swiggy Corporate
          </a>
          <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">
            Partner with us
          </a>
          <a className="border border-white px-6 py-2 rounded-2xl">
            Get the App ↗
          </a>
          <a className="bg-black px-6 py-2 rounded-2xl">
            Sign in
          </a>
        </nav>
      </div>

      <div className="relative pt-12 pb-36">
        <img
          className="hidden md:block absolute top-0 left-0 h-[420px]"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />

        <div className="flex flex-col md:flex-row justify-center gap-8 px-16">
          <div className="flex items-center bg-white rounded-2xl px-6 h-16 w-full md:w-[360px]">
            <span className="text-[#ff5200] mr-3 text-xl">📍</span>
            <input
              className="outline-none w-full text-gray-700 font-medium"
              placeholder="Enter your delivery location"
            />
            <span className="ml-2 text-gray-500">⌄</span>
          </div>

          <div className="flex items-center bg-white rounded-2xl px-6 h-16 w-full md:w-[560px]">
            <input
              className="outline-none w-full text-gray-700 font-medium"
              placeholder="Search for restaurant, item or more"
            />
            <span className="ml-2 text-gray-500">🔍</span>
          </div>
        </div>

        <img
          className="hidden md:block absolute top-0 right-0 h-[420px]"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />
      </div>

      <div className="w-full px-16 pb-20">
        <div className="flex justify-between gap-16">
          <Link to="/restaurant">
            <img
              className="w-[640px] h-[360px] object-contain"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png"
              alt=""
            />
          </Link>

          <Link to="/restaurant">
            <img
              className="w-[640px] h-[360px] object-contain"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/7a7904a7-e0a9-4466-8226-715999664e83_IM2BU.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </header>
  );
}




// divide by  4 :::: -> before giving width 