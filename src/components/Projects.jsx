import React from "react";
import Bookstore from "../../public/Bookstore.png";
import Hbtu from "../../public/Hbtu.png";
import Editor from "../../public/Editor.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: Bookstore,
      name: "BookStore",
      para: " Developed a responsive bookstore website for seamless browsing across all devices.",
      link: "https://mern-front2.vercel.app/",
    },
    {
      id: 2,
      logo: Hbtu,
      name: "Hbtu Website",
      para: "Designed and built a website for my college, HBTU, making it easy for users to find and explore.",
      link: "https://shiwanikumari0.github.io/HBTU/",
    },
    {
      id: 3,
      logo: Editor,
      name: "Intense Code Editor",
      para: "The project enables real-time collaboration across multiple programming languages.",
      link: "https://intense-code-editor.vercel.app/",
    },
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-10 "
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-3">
          {cardItem.map(({ id, logo, name, para, link }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[2000px] h-[120px] p-1  border-[4px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                
                <p className="px-2 text-gray-700">
                {para}
                </p>
              </div>
              <div className="card-actions justify-between mt-2">
              {/* <div className="badge badge-outline">${item.price}</div> */}
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] text-center hover:bg-green-500 hover:text-black bg-pink-500 duration-200"><a href={link}>
                Live site
              </a>
              </div>
              
            </div>
                
                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
