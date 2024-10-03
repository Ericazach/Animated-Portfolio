import React from "react";
import DarkBtn from "./DarkBtn";
import Link from "next/link";
import Image from "next/image";

function Social() {
  return (
    <div className="h-full flex items-center justify-between p-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-48">
      <div>
        <DarkBtn />
      </div>
      <div>
        <div className="flex items-center gap-4 w-[80%] md:w-full">
          <Link href="https://github.com/Ericazach">
            <Image src="/github.png" alt="" width={34} height={34} />
          </Link>
          <Link href="https://www.linkedin.com/in/erica-sanchez-11725426/">
            <Image src="/linkedin.png" alt="" width={34} height={34} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Social;
