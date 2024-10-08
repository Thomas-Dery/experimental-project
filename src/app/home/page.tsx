import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <div>
        <Link href={"/products"}>Prodcuts</Link>
      </div>
      <div>
        <Link href={"/reviews"}>Reviews</Link>
      </div>
      <div>
        <Link href={"/contact-us"}>Contact Us</Link>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
