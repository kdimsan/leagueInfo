import React from "react";
import Faq from "../faq/faq";
import Github from "@/components/icons/github";

export default function Footer() {
  return (
    <div className="w-full mt-9 bg-neutral-800 rounded-md xl:px-20 xl:py-2">
      <div className="flex flex-col items-center justify-between gap-5 p-2 md:flex-row md:items-start">
        <div>
          <Faq />
          <div>
            <p>This Website is in beta version.</p>
            <p>
              Please, if you have any questions or would like to request any
              implementation on the site, send us an email at
              <a
                href="mailto:league.of.finder@gmail.com"
                className="text-orange-300"
              >
                {" "}
                league.of.finder@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="md:h-full md:flex md:flex-col md:justify-between">
          <p>Version 0.0.1</p>
          <div className="flex items-center justify-center gap-2 whitespace-nowrap">
            <p>Developed by: Ricardo Santana</p>
            <div className="w-fit">
              <a href="https://github.com/kdimsan" target="_blank" className="">
                <Github fill={"#ffffff"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
