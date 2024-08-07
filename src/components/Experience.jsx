import React from "react";
import SelectorsHub from "../../public/SelectorsHub.png";
import CodeClause from "../../public/CodeClause.jpg";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: SelectorsHub,
      name: "SelectorsHub IT Services and IT Consulting     As Wordpress Developer",
      para: " SelectorsHub websites, ensuring optimal performance and user experience. Customized and optimized themes and plugins to meet specific client requirements. Elementor to create and customize web pages, improving design efficiency and client satisfaction.",
      link: "https://drive.google.com/file/d/1BvSrq5jL8HeHuJJ3wryMtpoHFzMbH_O3/view?usp=sharing/",
    },
    {
      id: 2,
      logo: CodeClause,
      name: "CodeClause IT Services and IT Consulting     As Frontend Developer",
      para: "Got to work on actual projects like Todo List, survey system, timer, and stopwatch. This helped me learn and apply industry-standard practices in software development. Motivated to try out new technologies and come up with creative solutions for difficult problems.",
      link: "https://drive.google.com/file/d/1bmQc0znlfx8gnZY5FHPNhIRF4xAHZ1fV/view?usp=drive_link/",
    },
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-10 "
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-3">
          {cardItem.map(({ id, logo, name, para, link }) => (
            <div
              className="md:w-[500px] md:h-[400px] border-[5px] rounded-lg shadow-lg p-2 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[800px] h-[200px] p-1  border-[4px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>

                <p className="px-2 text-gray-700">{para}</p>
              </div>
              <div className="card-actions justify-between mt-2">
                {/* <div className="badge badge-outline">${item.price}</div> */}
                <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] text-center hover:bg-green-500 hover:text-black bg-pink-500 duration-200">
                  <a href={link}>Certificate</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Experience;
