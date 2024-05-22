import React from "react";
import Faq from "../faq/faq";

export default function Footer() {
  return (
    <div className="w-full mt-9 bg-neutral-800 rounded-md xl:px-20 xl:py-2">
      <div className="flex justify-between p-2">
        <div>
          This website is in beta version.
          <Faq />
        </div>
        <div>Version 0.0.1</div>
      </div>
    </div>
  );
}
