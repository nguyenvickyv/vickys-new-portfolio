import React, { useState, useEffect } from "react";
import linkedin from "../assets/linkedin-logo.png";
import github from "../assets/github-logo.png";
import vn from "../assets/vicky-nguyen.svg";
import vnmobile from "../assets/vnmobile.svg";
import about from "../assets/about.svg";
import projects from "../assets/projects.svg";
import contact from "../assets/contact.svg";
import kahaani from "../assets/Kahaani.svg";
import mealmatch from "../assets/MealMatch.svg";
import project1 from "../assets/project1.png";
import project2 from "../assets/MealMatch.png";
import leftarrow from "../assets/left-arrow.svg";
import rightarrow from "../assets/right-arrow.svg";
import send from "../assets/send.svg";
import menu from "../assets/menu.svg";
import menubg from "../assets/menubg.png";
import transparentmenu from "../assets/transparentmenu.svg";
import SparkleLoader from "./SparkleLoader";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";

const Vicky = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileContent, setShowMobileContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const pages = [
    {
      name: "About",
      image: about,
      content: [
        "Hey, nice to meet you :) I’m Vicky — a full-stack developer, designer, and creative problem solver based in Houston.",
        "I graduated with a degree in Computer Science and have built everything from interactive 3D portfolios to an e-commerce store using Shopify, React, Firebase, and MongoDB. I’m especially passionate about crafting seamless user experiences and bridging the gap between design and development.",
        "Outside of coding, I’m usually sipping on a matcha or coffee, experimenting with DIY products, or planning my next creative idea.",
      ],
      links: [
        {
          title: linkedin,
          alt: "linkedin",
          link: "https://www.linkedin.com/in/vickyvietnguyen",
        },
        {
          title: github,
          alt: "github",
          link: "https://github.com/nguyenvickyv",
        },
      ],
    },
    {
      name: "Projects",
      image: projects,
      projects: [
        {
          title: kahaani,
          description:
            "A custom Shopify storefront built for a South Asian-inspired jewelry brand. I designed and developed the site from scratch using React, Node.js, and Shopify’s API to create a seamless shopping experience—complete with dynamic product pages, custom cart functionality, and a fully responsive layout.",
          link: "https://kahaaniuntold.com",
          image: project1,
        },
        {
          title: mealmatch,
          description:
            "A swiping-based food discovery app using React Native + Firebase.",
          link: "https://github.com/nguyenvickyv/MealMatch",
          image: project2,
        },
      ],
    },
    {
      name: "Contact",
      image: contact,
      content: `Let's get in touch!`,
    },
  ];
  const leftIndex = (currentIndex - 1 + pages.length) % pages.length;
  const rightIndex = (currentIndex + 1) % pages.length;

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => setFormSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <>
      {isLoading ? (
        <SparkleLoader />
      ) : (
        <>
          <div className="lg:hidden fixed top-4 right-4 z-[9999] ">
            <img
              src={menu}
              alt="Menu"
              className="w-15 h-15 cursor-pointer"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setShowMobileContent(false);
              }}
            />
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-2 w-screen h-screen">
            <div
              className={`fixed top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 bg-cover bg-center z-40 rounded-xl transition-opacity duration-300 ease-in-out ${
                mobileMenuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              style={{
                background: `#fff url(${menubg}) center center / cover no-repeat`,
              }}
            >
              <img
                className="w-6 h-6 absolute right-11 top-11 z-50"
                src={transparentmenu}
                onClick={() => {
                  if (showMobileContent || mobileMenuOpen) {
                    setShowMobileContent(false);
                    setMobileMenuOpen(false);
                  } else {
                    setMobileMenuOpen(true);
                  }
                }}
              />
              <div className="flex flex-col items-center gap-10 mt-[50%]">
                {pages.map((page, idx) => (
                  <div
                    key={page.name}
                    className=" cursor-pointer"
                    onClick={() => {
                      setCurrentIndex(idx);
                      setMobileMenuOpen(false);
                      setShowMobileContent(true);
                    }}
                  >
                    <img src={page.image} />
                  </div>
                ))}
              </div>
            </div>

            {showMobileContent && (
              <div>
                <a href="/">
                  <img src={vnmobile} className=" absolute top-5 left-5" />
                </a>
                <div className="w-screen h-screen z-50 flex flex-col items-center text-white font-['IBM_Plex_Mono'] justify-center">
                  <img
                    src={pages[currentIndex].image}
                    className="h-25 cursor-pointer my-7"
                  />
                  {pages[currentIndex].name === "Projects" ? (
                    <div className="space-y-6 text-center w-[85vw]">
                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={leftarrow}
                          alt="Previous Project"
                          onClick={() =>
                            setProjectIndex(
                              (projectIndex -
                                1 +
                                pages[currentIndex].projects.length) %
                                pages[currentIndex].projects.length
                            )
                          }
                        />
                        <a
                          href={pages[currentIndex].projects[projectIndex].link}
                        >
                          <img
                            src={
                              pages[currentIndex].projects[projectIndex].image
                            }
                            className="mx-auto rounded-2xl border-4 border-white"
                          />
                        </a>
                        <img
                          src={rightarrow}
                          alt="Next Project"
                          onClick={() =>
                            setProjectIndex(
                              (projectIndex -
                                1 +
                                pages[currentIndex].projects.length) %
                                pages[currentIndex].projects.length
                            )
                          }
                        />
                      </div>
                      <div className="relative mb-[60px]">
                        <a
                          href={pages[currentIndex].projects[projectIndex].link}
                        >
                          <img
                            src={
                              pages[currentIndex].projects[projectIndex].title
                            }
                            className="absolute bottom-[-50px] left-1/2 -translate-x-1/2"
                          />
                        </a>
                      </div>
                      <p className="text-2xl">
                        {pages[currentIndex].projects[projectIndex].description}
                      </p>
                      <a
                        className="!text-rose-300 underline text-2xl opacity-70 hover:opacity-100"
                        href={pages[currentIndex].projects[projectIndex].link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  ) : pages[currentIndex].name === "Contact" ? (
                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      onSubmit={(e) => {
                        setFormSubmitted(true);
                      }}
                      className="mt-3 font-['IBM_Plex_Mono'] text-xl text-left text-white w-[60%] "
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <label className="block">
                        Name (Required)
                        <input
                          name="name"
                          required
                          type="text"
                          className="block w-full border p-2 rounded mt-1"
                        />
                      </label>
                      <label className="block">
                        Email (Required)
                        <input
                          name="email"
                          required
                          type="email"
                          className="block w-full border p-2 rounded mt-1"
                        />
                      </label>
                      <label className="block">
                        Subject
                        <textarea
                          name="subject"
                          className="block w-full border p-2 rounded mt-1"
                        />
                      </label>
                      <label className="block">
                        Message
                        <textarea
                          name="message"
                          rows="4"
                          className="block w-full border p-2 rounded mt-1"
                        />
                      </label>
                      <div className="flex justify-center mt-6">
                        <button type="submit">
                          <img src={send} alt="Send" />
                        </button>
                      </div>

                      {formSubmitted && (
                        <p className="text-rose-300">Thanks! Message sent.</p>
                      )}
                    </form>
                  ) : (
                    <div className="lg:hidden w-[75vw]">
                      {Array.isArray(pages[currentIndex].content) ? (
                        pages[currentIndex].content.map((para, i) => (
                          <p
                            key={i}
                            className="mb-4 text-2xl text-white font-['IBM_Plex_Mono']"
                          >
                            {para}
                          </p>
                        ))
                      ) : (
                        <p className="text-2xl text-white font-['IBM_Plex_Mono']">
                          {pages[currentIndex].content}
                        </p>
                      )}
                      <div className="grid grid-cols-2 w-[30%] mx-auto mt-7">
                        <a
                          href="https://www.linkedin.com/in/vickyvietnguyen"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="w-15 h-15 hover:opacity-80 transition-opacity"
                            src={linkedin}
                          />
                        </a>

                        <a
                          href="https://github.com/nguyenvickyv"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="w-15 h-15 hover:opacity-80 transition-opacity"
                            src={github}
                          />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Left Column */}
            {!showMobileContent ? (
              <div className="grid grid-rows-3 gap-5 my-auto ml-[20%]">
                <div className="w-[500px] lg:w-[593px] justify-center hover:opacity-80 transition-opacity">
                  <a href="/home">
                    <img src={vn} />
                  </a>
                </div>
                <div className="w-[500px] text-left text-rose-200 text-2xl font-semibold font-['IBM_Plex_Mono'] pl-5">
                  <p>
                    Full-Stack Developer with a creative eye, a love for UI/UX,
                    and a brain powered by caffeine.
                  </p>
                </div>
                <div className="grid grid-cols-2 w-[250px] pl-5">
                  <a
                    href="https://www.linkedin.com/in/vickyvietnguyen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-15 h-15 hover:opacity-80 transition-opacity"
                      src={linkedin}
                    />
                  </a>
                  <a
                    href="https://github.com/nguyenvickyv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-15 h-15 hover:opacity-80 transition-opacity"
                      src={github}
                    />
                  </a>
                </div>
              </div>
            ) : null}

            {/* Right Column On Desktop*/}
            <div className="hidden m-auto lg:block lg:w-[50%]">
              <div className="flex justify-center gap-10 items-center">
                <img
                  src={pages[leftIndex].image}
                  className="h-8 opacity-80 hover:opacity-100 cursor-pointer"
                  onClick={() => setCurrentIndex(leftIndex)}
                />
                <img
                  src={pages[currentIndex].image}
                  className="h-25 opacity-100 hover:opacity-100 cursor-pointer"
                />
                <img
                  src={pages[rightIndex].image}
                  className="h-8 opacity-80 hover:opacity-100 cursor-pointer"
                  onClick={() => setCurrentIndex(rightIndex)}
                />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {pages[currentIndex].name === "Projects" ? (
                    <div>
                      <div className="flex items-center justify-center gap-4 mt-6">
                        <img
                          src={leftarrow}
                          alt="Previous Project"
                          onClick={() =>
                            setProjectIndex(
                              (projectIndex -
                                1 +
                                pages[currentIndex].projects.length) %
                                pages[currentIndex].projects.length
                            )
                          }
                        />
                        <a
                          href={pages[currentIndex].projects[projectIndex].link}
                        >
                          <img
                            src={
                              pages[currentIndex].projects[projectIndex].image
                            }
                            className="mx-auto"
                          />
                        </a>
                        <img
                          src={rightarrow}
                          alt="Next Project"
                          onClick={() =>
                            setProjectIndex(
                              (projectIndex -
                                1 +
                                pages[currentIndex].projects.length) %
                                pages[currentIndex].projects.length
                            )
                          }
                        />
                      </div>

                      <div className="relative mb-[60px]">
                        <a
                          href={pages[currentIndex].projects[projectIndex].link}
                        >
                          <img
                            src={
                              pages[currentIndex].projects[projectIndex].title
                            }
                            className="absolute bottom-[-50px] left-1/2 -translate-x-1/2"
                          />
                        </a>
                      </div>
                      <p className="text-white mb-2 text-2xl">
                        {pages[currentIndex].projects[projectIndex].description}
                      </p>
                      <a
                        className="!text-rose-300 underline text-2xl opacity-70 hover:opacity-100"
                        href={pages[currentIndex].projects[projectIndex].link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  ) : pages[currentIndex].name === "Contact" ? (
                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      onSubmit={(e) => {
                        setFormSubmitted(true);
                      }}
                      className="mt-6 font-['IBM_Plex_Mono'] text-2xl text-left text-white"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <label className="block pb-5">
                        Name (Required)
                        <input
                          name="name"
                          required
                          type="text"
                          className="block w-full border p-2 rounded mt-1"
                        />
                      </label>
                      <label className="block pb-5">
                        Email (Required)
                        <input
                          name="email"
                          required
                          type="email"
                          className="block w-full border p-2 rounded mt-1"
                        />
                      </label>
                      <label className="block pb-5">
                        Subject
                        <textarea
                          name="subject"
                          className="block w-full border p-2 rounded mt-1"
                        />
                      </label>
                      <label className="block pb-5">
                        Message
                        <textarea
                          name="message"
                          rows="4"
                          className="block w-full border p-2 rounded mt-1"
                        />
                      </label>
                      <div className="flex justify-center">
                        <button type="submit">
                          <img src={send} alt="Send" />
                          Send
                        </button>
                      </div>

                      {formSubmitted && (
                        <p className="text-green-500">
                          ✅ Thanks! Message sent.
                        </p>
                      )}
                    </form>
                  ) : (
                    <div className="text-center">
                      {Array.isArray(pages[currentIndex].content) ? (
                        pages[currentIndex].content.map((para, i) => (
                          <p
                            key={i}
                            className="mb-4 text-2xl text-white font-['IBM_Plex_Mono']"
                          >
                            {para}
                          </p>
                        ))
                      ) : (
                        <p className="text-2xl text-white font-['IBM_Plex_Mono']">
                          {pages[currentIndex].content}
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Vicky;
