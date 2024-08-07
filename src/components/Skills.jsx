import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpeg";
import Java from "../../public/Java.png";
import Js from "../../public/Js.png";
import react from "../../public/react.png";
import Bootstrap from "../../public/Bootstrap.jpeg";
import Tailwind from "../../public/Tailwind.jpeg";
import Wordpress from "../../public/Wordpress.png";
import Github from "../../public/Github.png";
function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "Html",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: Java,
      name: "Java",
    },
    {
      id: 4,
      logo: Js,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: react,
      name: "React",
    },
    {
      id: 6,
      logo: Bootstrap,
      name: "Bootstrap",
    },
    {
      id: 7,
      logo: Tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 8,
      logo: Wordpress,
      name: "Wordpress",
    },
    {
      id: 9,
      logo: Github,
      name: "Github",
    },
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
      
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
