import React from "react";
import { SiteHeader } from "./SiteHeader";
import { IntersectionSwap } from "./IntersectionSwap";
import { Nav } from "./Nav";

function Header() {
  return (
    <IntersectionSwap nav={<SiteHeader />}>
      <div className="space-y-8">
        <div className="flex items-center space-x-6">
          <div>Logo</div>

          <div className="mt-2">
            <h1 className="text-3xl font-semibold leading-none text-rose-100/90">
              Ruhul
            </h1>
            <h2 className="mt-2 items-center space-y-2 text-lg font-medium leading-none text-rose-100/50 lg:mt-0 lg:flex lg:space-y-0 lg:space-x-2">
              <div className="whitespace-nowrap">Developer Experience at</div>
              <div className="flex space-x-2">
                <a
                  className="group flex items-center space-x-1.5"
                  href="https://vercel.com"
                >
                  <div className="mb-1 h-6 w-6 rounded-md bg-black p-[7px] text-white shadow-lg shadow-rose-900/60 ring-2 ring-rose-400/20 group-hover:shadow-xl group-hover:shadow-rose-700 group-hover:ring-rose-400/30">
                    vercel
                  </div>
                  <div className=" group-hover:text-rose-100/90">Vercel</div>
                </a>

                <div className="text-2xl font-thin leading-none text-rose-100/10">
                  /
                </div>

                <a
                  className="group flex items-center space-x-1.5"
                  href="https://nextjs.org"
                >
                  <div className="mb-1 h-6 w-6 rounded-md bg-black text-white shadow-lg shadow-blue-900/60 ring-2 ring-blue-400/20 group-hover:shadow-xl group-hover:shadow-blue-700 group-hover:ring-blue-400/30">
                    next
                  </div>
                  <div className="group-hover:text-rose-100/90">Next</div>
                </a>
              </div>
            </h2>
          </div>
        </div>

        <div className="text-xl text-rose-100/90">
          lorem ipsum dolor sit amet
        </div>

        <Nav />
      </div>
    </IntersectionSwap>
  );
}

export default Header;
