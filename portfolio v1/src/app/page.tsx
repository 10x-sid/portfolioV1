"use client";
import { useState, useEffect } from "react";
import { BiLogoGmail, BiLogoGithub } from "react-icons/bi";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";
import { Projects, Skills } from "../app/details";
import Link from "next/link";
export default function Home() {
  const [Section, setSection] = useState("Projects");
  const [Hovered,setHovered] =useState("");
  const [highlightStyle, setHighlightStyle] = useState({
    top: "",
    left: "",
    width: "",
    height: "",
    display: "none",
  });

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    setHighlightStyle({
      top: `${clientY}px`,
      left: `${clientX}px`,
      width: "400px",
      height: "400px",
      display: "block",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const expSection = document.querySelector(".experience");
      const projectSection = document.querySelector(".project");
      const aboutSection = document.querySelector(".about");
      let windowHeight = window.innerHeight;
      const segmentHeight = windowHeight / 5;
      if (projectSection && aboutSection && expSection) {
        const projectRect = projectSection.getBoundingClientRect();
        const aboutRect = aboutSection.getBoundingClientRect();
        if (aboutRect.top <= segmentHeight) {
          setSection("About");
          console.log(true + "about");
        } else if (projectRect.top <= 3 * segmentHeight) {
          setSection("Projects");
          console.log(true + "project");
        } else {
          setSection("experience");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMouseLeave = () => {
    setHighlightStyle({
      top: "",
      left: "",
      width: "",
      height: "",
      display: "none",
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full min-h-screen  grid grid-cols-2 relative bg-[#0F172A] text-white px-40 inter-font max-xl:px-20 max-lg:grid-cols-1 max-lg:px-8 max-sm:p-0"
    >
      <div className="highlight absolute top-[400px] left-[33px] h-[400px] w-[400px] min-[768px]:hidden"></div>
      <section className="mt-24 relative z-10 max-lg:mt-20">
        <section className="flex flex-col max-lg:w-full max-lg:mb-16 max-lg:justify-center max-sm:justify-normal max-lg:items-center max-sm:max-h-[80vh] gap-12 max-h-screen fixed max-xl:static max-sm:px-8">
          <div className="flex flex-col gap-4 max-lg:items-center max-sm:items-start">
            <h1 className="text-5xl font-bold max-xl:text-4xl max-sm:text-3xl">
              Sudhanshu Shekhar
            </h1>
            <h2 className="text-2xl font-bold text-slate-200 max-sm:text-xl">
              Full Stack Developer
            </h2>
            <p className=" text-base text-slate-400">
              I build pixel-perfect, engaging, <br /> and accessible digital
              experiences.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-lg:hidden">
            <p
              className={`flex items-center text-slate-300 gap-4 ${
                Section == "experience" ? "font-bold" : "font-medium"
              }`}
            >
              <span
                className={`block h-px bg-white ${
                  Section == "experience" ? "w-20" : "w-16"
                }`}
              ></span>
              EXPERIENCE
            </p>
            <p
              className={`flex items-center text-slate-300 gap-4 ${
                Section == "Projects" ? "font-bold" : "font-medium"
              }`}
            >
              <span
                className={`block h-px bg-white ${
                  Section == "Projects" ? "w-20" : "w-16"
                }`}
              ></span>
              PROJECTS
            </p>
            <p
              className={`flex items-center text-slate-300 gap-4 ${
                Section == "About" ? "font-bold" : " font-medium"
              }`}
            >
              <span
                className={`block h-px bg-white ${
                  Section == "About" ? "w-20" : "w-16"
                }`}
              ></span>
              ABOUT
            </p>
          </div>
          <button className="px-4 py-2 font-semibold w-fit text-[#5EEAD4] bg-[#2DD4BF1A] rounded-md border hover:bg-[#2DD4BF1A] hover:text-white transition-colors duration-300">
            View My Resume
          </button>

          <div className="flex gap-6 mt-20 max-lg:mt-10 text-3xl text-slate-400">
          <Link href="https://github.com/10x-sid" target="_blank"><BiLogoGithub className="cursor-pointer hover:text-gray-400 transition-colors duration-300" /></Link>
            
           <Link href="https://www.linkedin.com/in/shekharsid/" target="_blank"> <BsLinkedin   className="cursor-pointer hover:text-gray-400 transition-colors duration-300" /></Link>
            <Link href={"https://twitter.com/twtshekhar"} target="_blank"><BsTwitterX className="cursor-pointer hover:text-gray-400 transition-colors duration-300" /></Link>
           <a href="mailto:contact.sidshekhar@gmail.com"> <BiLogoGmail  className="cursor-pointer hover:text-gray-400 transition-colors duration-300" /></a>
          </div>
        </section>
      </section>

      <section className="flex flex-col gap-12 mt-24 z-10 max-lg:mt-0 experience">
        <div className="flex gap-4 max-lg:w-full max-lg:justify-center max-lg:p-4">
          <span className=" max-lg:hidden h-[200px] flex flex-col justify-center items-center min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10 relative">
            <div
              className={`absolute top-1/4 w-2 h-2  rounded-full ${
                Hovered === "First" ? "bg-white" : "bg-white/50"
              }`}
            ></div>
            {/* <div
              className={`absolute bottom-1/4 w-2 h-2  rounded-full ${
                Hovered === "Second" ? "bg-white" : "bg-white/50"
              }`}
            ></div> */}
          </span>
          <div>
            <div
              onMouseOver={() => setHovered("First")}
              className="flex gap-4 p-4 rounded-lg hover:shadow-xl hover:bg-[#212e4280] hover:bg-opacity-50 max-md:hover:bg-none max-md:hover:shadow-none"
            >
              <span className="text-sm text-slate-400 w-[50%]">
                april 2024 - present
              </span>
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-semibold text-gray-100">
                  Physics Wallah
                </h1>
                <div className="text-base text-slate-500 max-sm:text-sm">
                  <li>created a e learning projects</li>
                  <li>
                    creted adimin pannel to upload course and mangane them
                  </li>
                  <li>created a user login adn can se all the course in db</li>
                </div>
              </div>
            </div>

            {/* <div
              onMouseOver={() => setHovered("Second")}
              className="flex gap-4 p-4 rounded-lg hover:shadow-xl hover:bg-[#212e4280] hover:bg-opacity-50 max-md:hover:bg-none max-md:hover:shadow-none"
            >
              <span className="text-sm text-slate-400 w-[50%]">
                april 2024 - present
              </span>
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-semibold text-gray-100">
                  Physics Wallah
                </h1>
                <div className="text-base text-slate-500 max-sm:text-sm">
                  <li>created a e learning projects</li>
                  <li>
                    creted adimin pannel to upload course and mangane them
                  </li>
                  <li>created a user login adn can se all the course in db</li>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        </div>

        <section className="flex flex-col gap-12 mt-24 z-10 max-lg:p-2 max-lg:mt-0 project">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="flex gap-4 p-4 rounded-lg hover:shadow-xl hover:bg-[#212e4280] hover:bg-opacity-50 max-md:hover:bg-none max-md:hover:shadow-none"
            >
              <span className="text-sm text-slate-400 w-[50%]">
                {project.Duration}
              </span>
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-semibold text-gray-100">
                  {project.Title}
                </h1>
                <p className="text-base text-slate-500 max-sm:text-sm">
                  {project.Description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.Tools.map((tool, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 text-[#5EEAD4] bg-[#2DD4BF1A] font-bold rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <section className="flex flex-col gap-8 p-8  rounded-lg about">
            <div className="">
              <h1 className="text-3xl text-center font-bold text-gray-200 mb-4 max-sm:text-xl">
                Welcome to My Portfolio!
              </h1>
              <p className="text-lg  text-gray-400 max-sm:text-base">
                Hey there! I'm Sudhanshu, a passionate and dedicated full stack
                developer with a love for crafting exceptional digital
                experiences. With a background in both front-end and back-end
                development, I specialize in building robust web applications
                from concept to deployment.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-2xl font-bold text-gray-200 max-sm:text-xl">
                What I Do:
              </h2>
              {Skills.map((skill) => (
                <p
                  key={skill.id}
                  className="text-md text-bold text-gray-400 max-sm:text-base"
                >
                  <strong className="text-gray-300">{skill.Title}</strong>
                  {skill.Description}
                </p>
              ))}
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}
