import React, { InputHTMLAttributes, ReactElement } from "react";
import { InputType } from "zlib";
import Contact from "./contact";

const InputText = ({
  placeholder,
  type,
  height,
}: {
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  height?: string;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`bg-transparent border rounded-md border-white px-3 py-1 outline-1 focus:outline-white ${height}`}
  />
);

export default function FormFooter() {
  return (
    <div className="flex flex-col gap-3 items-center md:flex-row md:items-start md:justify-center md:gap-5 max-w-xs md:max-w-none">
      <Contact />
      <form
        action={"mailto: league.of.finder@gmail.com"}
        method="post"
        className="flex flex-col gap-4 w-full"
      >
        <div className="flex flex-col gap-2 md:flex-row">
          <InputText placeholder="Name" type="text" />
          <InputText placeholder="Email" type="email" />
        </div>
        <textarea
          placeholder="Message"
          className="bg-transparent border rounded-md border-white px-3 py-1 outline-1 focus:outline-white h-28"
        />
        <button
          type="submit"
          className="border-b border-white w-fit m-auto font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
