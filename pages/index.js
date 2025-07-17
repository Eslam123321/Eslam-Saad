import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiGraphql, SiRedux, SiTailwindcss, SiBootstrap, SiAuth0, SiJest, SiSocketdotio, SiVercel, SiHeroku, SiNetlify } from "react-icons/si";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSkillsScroll = () => {
    window.scrollTo({
      top: skillsRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleSkillsScroll={handleSkillsScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <div className="relative w-full flex items-start">
              <h1
                ref={textOne}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full mob:w-full laptop:w-full flex items-center gap-2"
              >
                {data.headerTaglineOne} <span aria-label="wave">👋</span>
              </h1>
              <img
                src="/images/profile.jpg.png"
                alt="Profile"
                className="hidden tablet:block absolute right-0 top-1 w-40 h-40 tablet:w-72 tablet:h-72 laptop:w-96 laptop:h-96 rounded-full shadow-2xl object-cover floating-profile border-4 border-white dark:border-slate-800 z-10"
                style={{animation: 'floatY 3s ease-in-out infinite'}}
              />
            </div>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={skillsRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">Skills.</h1>
          <div className="tablet:m-10 mt-2 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
            {/* HTML, CSS, JS */}
            <div className="w-full p-4 rounded-xl transition-all ease-out duration-300 bg-white/30 dark:bg-slate-800/30 backdrop-blur-md shadow-lg hover:scale-105 active:scale-100 flex items-center gap-4 border border-white/40 dark:border-slate-700/40 cursor-pointer link hover:bg-slate-100 dark:hover:bg-slate-600">
              <FaHtml5 className="text-3xl text-orange-600" />
              <FaCss3Alt className="text-3xl text-blue-600" />
              <FaJs className="text-3xl text-yellow-400" />
              <span className="text-xl font-bold">HTML, CSS, JavaScript (ES6+)</span>
            </div>
            {/* React, Next.js */}
            <div className="w-full p-4 rounded-lg transition-all ease-out duration-300 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-lg hover:scale-105 link flex items-center gap-4">
              <FaReact className="text-3xl text-cyan-500" />
              <SiNextdotjs className="text-3xl text-black dark:text-white" />
              <span className="text-xl font-bold">React.js, Next.js</span>
            </div>
            {/* Node.js, Express.js */}
            <div className="w-full p-4 rounded-lg transition-all ease-out duration-300 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-lg hover:scale-105 link flex items-center gap-4">
              <FaNodeJs className="text-3xl text-green-600" />
              <span className="text-xl font-bold">Node.js, Express.js</span>
            </div>
            {/* MongoDB, MySQL */}
            <div className="w-full p-4 rounded-lg transition-all ease-out duration-300 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-lg hover:scale-105 link flex items-center gap-4">
              <SiMongodb className="text-3xl text-green-700" />
              <SiMysql className="text-3xl text-blue-700" />
              <span className="text-xl font-bold">MongoDB, MySQL</span>
            </div>
            {/* RESTful APIs, GraphQL */}
            <div className="w-full p-4 rounded-lg transition-all ease-out duration-300 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-lg hover:scale-105 link flex items-center gap-4">
              <SiGraphql className="text-3xl text-pink-500" />
              <span className="text-xl font-bold">RESTful APIs, GraphQL</span>
            </div>
            {/* Redux, Context API */}
            <div className="w-full p-4 rounded-lg transition-all ease-out duration-300 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-lg hover:scale-105 link flex items-center gap-4">
              <SiRedux className="text-3xl text-purple-500" />
              <span className="text-xl font-bold">Redux, Context API</span>
            </div>
            {/* Git, GitHub, CI/CD */}
            <div className="w-full p-4 rounded-lg transition-all ease-out duration-300 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-lg hover:scale-105 link flex items-center gap-4">
              <FaGitAlt className="text-3xl text-orange-500" />
              <span className="text-xl font-bold">Git, GitHub, CI/CD</span>
            </div>
            {/* Tailwind CSS, Bootstrap */}
            <div className="w-full p-4 rounded-lg transition-all ease-out duration-300 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-lg hover:scale-105 link flex items-center gap-4">
              <SiTailwindcss className="text-3xl text-cyan-400" />
              <SiBootstrap className="text-3xl text-purple-700" />
              <span className="text-xl font-bold">Tailwind CSS, Bootstrap</span>
            </div>
            {/* Authentication & Authorization */}
            <div className="w-full p-4 rounded-lg transition-all ease-out duration-300 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-lg hover:scale-105 link flex items-center gap-4">
              <SiAuth0 className="text-3xl text-orange-600" />
              <span className="text-xl font-bold">Authentication & Authorization</span>
            </div>
            {/* Testing */}
            <div className="w-full p-4 rounded-lg transition-all ease-out duration-300 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-lg hover:scale-105 link flex items-center gap-4">
              <SiJest className="text-3xl text-pink-600" />
              <span className="text-xl font-bold">Testing (Jest, React Testing Library)</span>
            </div>
            {/* Socket.io, WebSockets */}
            <div className="w-full p-4 rounded-lg transition-all ease-out duration-300 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-lg hover:scale-105 link flex items-center gap-4">
              <SiSocketdotio className="text-3xl text-black dark:text-white" />
              <span className="text-xl font-bold">Socket.io, WebSockets</span>
            </div>
            {/* Deployment */}
            <div className="w-full p-4 rounded-lg transition-all ease-out duration-300 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-lg hover:scale-105 link flex items-center gap-4">
              <SiVercel className="text-3xl text-black dark:text-white" />
              <SiHeroku className="text-3xl text-indigo-700" />
              <SiNetlify className="text-3xl text-green-500" />
              <span className="text-xl font-bold">Deployment (Vercel, Heroku, Netlify)</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <style jsx global>{`
        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
          100% { transform: translateY(0); }
        }
        .floating-profile {
          animation: floatY 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
