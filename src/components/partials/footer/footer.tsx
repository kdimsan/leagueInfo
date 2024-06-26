import React from "react";
import Faq from "./faq/faq";
import Github from "@/components/icons/github";
import FormFooter from "./formFooter/formFooter";

export default function Footer() {
  return (
    <footer className="w-full mt-9 default-bg xl:px-20 xl:py-2">
      <section className="flex flex-col items-center justify-between gap-5 p-2">
        <FormFooter />
        <div className="flex items-center justify-between gap-3 w-full">
          <p>Version 0.0.1</p>
          <div className="flex items-center justify-center gap-2">
            <p>Developed by: Ricardo Santana</p>
            <div className="w-fit">
              <a href="https://github.com/kdimsan" target="_blank" className="">
                <Github fill={"#ffffff"} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
