import React from "react";
import Profile from "../../public/Profile.png";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import resume from "../../public/resume.pdf";


function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <br />
            <br />
            <div className="flex space-x-1 text-2xl md:text-4xl">
            
              <h1>Hello, I'm a </h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am passionate about working in IT industries and dedicated to
              achieve my goal to become a software engineer.
            
                
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                
                    <a href="https://www.linkedin.com/in/shiwani-kumari10/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/@shiwanikumari3291?si=u3ZEhK0jxyODaK_B/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/shiwanikumari0/" target="_blank">
                      <FaGithub  className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="h-[8vh] flex justify-center item-center">
            <button className="cursor-pointer px-2 py-1 rounded-half border-[1px] text-center font-bold hover:bg-green-500 hover:text-black bg-pink-500 duration-200">
              <a href={resume} download='resume'>Download CV</a>
            </button>
          </div>
                
            </div>
            
          </div>
         
          <div className="md:w-1/2 md:ml-48 md:mt-10 mt-8 order-1">
            <img
              src={Profile}
              className="rounded-full md:w-[400px] md:h-[400px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
