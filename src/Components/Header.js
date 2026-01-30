import {Link} from "react-router-dom"
export default function Header() {
  return (
    <header className="bg-[#ff5200]">
      <div className="container mx-auto px-6 flex items-center justify-between h-17 pt-5">
        <img
          className="h-11 w-auto"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt="Swiggy"
        />

        <nav className="flex items-center gap-10 text-white text-base font-bold">
          <a href="https://www.swiggy.com/corporate/" target="_blank">
            Swiggy Corporate
          </a>
          <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">
            Partner with us
          </a>
          <a className="border border-white px-6 py-3 rounded-2xl flex items-center gap-2">
            Get the App ↗
          </a>
          <a className="bg-black px-6 py-3 rounded-2xl">Sign in</a>
        </nav>
      </div>

      <div className="relative pb-28">
        <img
          className="absolute top-0 left-0 h-96"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
        />

        <div className="mt-20 flex justify-center gap-6 ">
          <div className="flex items-center bg-white rounded-2xl px-5 h-16 w-[30%]">
            <span className="text-[#ff5200] mr-3 text-xl">📍</span>
            <input
              className="outline-none w-full text-gray-700 placeholder-gray-400 font-medium"
              placeholder="Enter your delivery location"
            />
            <span className="ml-2 text-gray-500">⌄</span>
          </div>

          <div className="flex items-center bg-white rounded-2xl px-5 h-16 w-[420px]">
            <input
              className="outline-none w-full text-gray-700 placeholder-gray-400 font-medium"
              placeholder="Search for restaurant, item or more"
            />
            <span className="ml-2 text-gray-500">🔍</span>
          </div>
        </div>

        <img
          className="absolute top-0 right-0 h-96"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
        />
      </div>

      <div className="flex justify-center gap-6 w-310 h-95 ml-35 ">
       <Link to={"/restaurant"}>
          <img className="w-150 h-90" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png"></img>
      </Link>
        
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
          <img  className="w-150 h-90"   src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/7a7904a7-e0a9-4466-8226-715999664e83_IM2BU.png"></img>
        </a>
        

      </div>
    </header>
  );
}



// divide by  4 :::: -> before giving width 