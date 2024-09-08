import React from "react";
import brand from "../assets/brand.png";
import { LINKS } from "../content";
function Navbar() {
  return (
    <nav>
      <div className="flex  w-[1407px] h-[107px] lg:w-full  justify-between items-center px-[6rem] lg:px-[10rem] py-[2rem]">
        {/* my brand section  */}
        <a href="#">
          <img
            className=""
            src={brand}
            width={76}
            height={42.75}
            alt="brand"
          ></img>
        </a>
        {/* nav items */}
        <div className="flex font-semibold ">
          <div className="space-x-7 ">
            {LINKS.map((links, index) => (
              <a key={index} href={links.links}>
                {links.text}
              </a>
            ))}
          </div>
        </div>
        {/* logo */}
        <div>
          <div className="bg-red-600 ">
            <button className=" text-white w-[75px] h-[31px]  ">LogIn</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
