import React from "react";
import disk from "../../img/person.jpg";

const HomePage = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-center text-7xl font-serif font-bold">
        5 VSCode extensions/tricks to <br /> speed up React/Nextjs <br />{" "}
        development workflow
      </h1>
      <div className="flex justify-center items-center  h-screen">
        <img
          src="https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="max-w-full max-h-[900px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
