import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex p-5 justify-between sticky
    top-0 bg-white shadow-md">
      {/* //! Left */}
      <div className="flex space-x-2">
        <Image
          src="https://links.papareact.com/4t3"
          alt="Logo"
          height={30}
          width={30}
        />
        <div>
          <h1 className="font-bold">
            <span className="text-violet-500">AI</span>- Image Generator
          </h1>
          <h2 className="text-xs">Powered by DALL-E 2.0, </h2>
        </div>
      </div>
      {/* Right */}
      <div className="flex text-xs md:text-base divide-x items-center">
        <Link className="px-2 font-light text-right" href="https://shimiltharayil.netlify.app/">Connect With Me</Link>
      </div>
    </header>
  );
}

export default Header;
