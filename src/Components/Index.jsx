import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import Homepic from "/images/Home.jpg";

const Home = () => {
  return (
    <div className="bg-homeBg">
      <div className="container mx-auto p-4 lg:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-x-32">
          <div className={`mt-8 lg:mt-0 lg:pt-32 animate-slide-in`}>
            <Typography variant="h6" className="text-xs">
              Hello, I am Abel Sileshie
            </Typography>
            <Typography className="text-2xl lg:text-4xl font-extrabold mt-4">
              I am a Front End{" "}
              <span className="text-[#5E3BEE]">Website Developer</span> And
              UI/UX Designer
            </Typography>
            <Typography className="text-sm lg:text-md font-body text-justify text-[#282938] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </Typography>
            <div className="flex space-x-4 mt-8">
              <Button className="w-24 bg-[#5E3BEE] rounded-none">
                <a
                  href={`mailto:sileshieabel@gmail.com?subject=${encodeURIComponent(
                    "Your Subject Here"
                  )}`}
                >
                  Contact Me
                </a>
              </Button>
              <a href="https://www.linkedin.com/in/abelsileshie/">
                <Button className="w-24 bg-[#5E3BEE] rounded-none">
                  Linkedin
                </Button>
              </a>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:p-24 rounded-2xl w-full h-full flex justify-center lg:justify-end">
            <img
              src={Homepic}
              alt="Home"
              className="rounded-3xl w-full lg:w-auto lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
