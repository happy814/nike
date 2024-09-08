import React from "react";
import { HERO_CONTENT } from "../content";

function Hero() {
  return (
    <div className="  select-none  flex justify-center w-full px-7 pt-0 ">
      <section className="container max-w-auto  ">
        <div className="flex  px-16  ">
          {/* hero title */}
          <div>
            <h1 className=" lg:w-[595px] font-extrabold leading-none text-8xl    ">
              {HERO_CONTENT.title}
            </h1>
            <p className="font-semibold lg:w-[404px] pt-6 text-gray-500 ">
              {HERO_CONTENT.subtitle}
            </p>
            {/* button section */}
            <div className=" pt-10   space-x-7 lg:pl-0  pl-0">
              <button className="text-white w-[150] text-3xl px-1 py-1 bg-red-600">
                Shop Now
              </button>

              <button className=" text-gray-500 border border-black  w-[150]  py-1 px-1 text-3xl ">
                Category
              </button>
            </div>
            <p className=" lg:pt-8 text-gray-500  ">Also Available On</p>

            {/* logo section */}
            <div className="flex gap-5">
              {" "}
              <img src={HERO_CONTENT.logo} alt="" />
              <img src={HERO_CONTENT.logo2} alt="" />
            </div>
          </div>

          {/* img section */}
          <div className=" mt-[23px] ">
            <img
              className="lg:w-[504px]lg:h-[487px] "
              src={HERO_CONTENT.image}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
