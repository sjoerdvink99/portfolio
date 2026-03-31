import React, { useState, useEffect, useRef } from "react";
import sjoerd from "./assets/sjoerd.jpg";
import linkedin from "./assets/linkedin.svg";
import mail from "./assets/mail.svg";
import medium from "./assets/medium.svg";
import github from "./assets/github.svg";
import { news } from "./news";
import { publications } from "./publications";
import type { Publication } from "./types";

function App() {
  const [activeTab, setActiveTab] = useState<"selected" | "all">("selected");
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 1 }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const filteredPubs: Publication[] =
    activeTab === "selected"
      ? publications.filter((pub) => pub.selected)
      : publications;

  return (
    <div className="flex flex-col min-h-screen w-full px-4 md:px-8 lg:w-3/4 xl:w-2/4 mx-auto">
      <section className="py-6 md:py-10 flex flex-col sm:flex-row items-center sm:items-start">
        <img
          src={sjoerd}
          className="h-32 md:h-40 mb-4 sm:mb-0"
          alt="Sjoerd Vink"
        />
        <div className="flex flex-col sm:ml-4 text-center sm:text-left">
          <h1 className="text-3xl md:text-4xl font-light">Sjoerd Vink</h1>
          <span className="font-light">
            PhD Student in CS at Utrecht University
          </span>
          <span className="font-light">Software Engineer at GraphPolaris</span>
          <span className="font-light">sjoerdvink@icloud.com</span>
          <div className="mt-3 flex justify-center sm:justify-start">
            <a
              href="https://github.com/sjoerdvink99"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github}
                className="mr-1 hover:-translate-y-1 transition-all duration-150 ease-in-out"
                alt="linkedin profile"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sjoerdvink/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                className="mr-1 hover:-translate-y-1 transition-all duration-150 ease-in-out"
                alt="linkedin profile"
              />
            </a>
            <a
              href="https://sjoerdvink.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={medium}
                className="mr-1 hover:-translate-y-1 transition-all duration-150 ease-in-out"
                alt="medium"
              />
            </a>
            <a
              href="mailto:sjoerdvink@icloud.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mail}
                className="hover:-translate-y-1 transition-all duration-150 ease-in-out"
                alt="email"
              />
            </a>
          </div>
        </div>
      </section>
      <div ref={sentinelRef} />
      <nav className={`sticky top-0 z-10 bg-white border-y-2 py-4 transition-shadow duration-200 ${isSticky ? "shadow-sm" : ""}`}>
        <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
          <li className="py-1">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
              About
            </a>
          </li>
          <li className="py-1">
            <a href="#news" onClick={(e) => handleSmoothScroll(e, "news")}>
              News
            </a>
          </li>
          <li className="py-1">
            <a
              href="#publications"
              onClick={(e) => handleSmoothScroll(e, "publications")}
            >
              Publications
            </a>
          </li>
          <li className="py-1">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <section id="about" className="py-10 border-b-2">
        <p>
          Hi! I'm a PhD candidate in Computer Science at{" "}
          <a
            className="underline"
            href="https://www.uu.nl/en/"
            target="_blank"
            rel="noreferrer"
          >
            Utrecht University
          </a>
          , co-advised by{" "}
          <a
            className="underline"
            href="https://michael.behrisch.info/"
            target="_blank"
            rel="noreferrer"
          >
            Michael Behrisch
          </a>{" "}
          and{" "}
          <a
            className="underline"
            href="https://www.cs.tufts.edu/~remco/"
            target="_blank"
            rel="noreferrer"
          >
            Remco Chang
          </a>
          . I'm affiliated with the{" "}
          <a
            className="underline"
            href="https://vig.science.uu.nl/"
            target="_blank"
            rel="noreferrer"
          >
            Visualization and Graphics Group
          </a>{" "}
          at Utrecht, and the{" "}
          <a
            className="underline"
            href="https://valt.cs.tufts.edu/"
            target="_blank"
            rel="noreferrer"
          >
            Visual Analytics Lab
          </a>{" "}
          at{" "}
          <a
            className="underline"
            href="https://www.tufts.edu/"
            target="_blank"
            rel="noreferrer"
          >
            Tufts University
          </a>
          . I also work as a research engineer at{" "}
          <a
            className="underline"
            href="https://graphpolaris.com/"
            target="_blank"
            rel="noreferrer"
          >
            GraphPolaris
          </a>
          .
        </p>

        <p className="mt-4">
          My research focuses on designing user-facing systems that surface the
          power of data and AI through expressive, accessible interfaces. I
          build intelligent tools that bridge technical infrastructure, human
          intent, and system complexity—empowering more people to work
          meaningfully with data.
        </p>
      </section>
      <section id="news" className="py-10 border-b-2">
        <h2 className="text-2xl mb-6">News</h2>
        <div className="space-y-6">
          {news.map((item, index) => (
            <div key={index} className="border-l-4 border-gray-300 pl-4">
              <p className="text-sm text-gray-500">{item.date}</p>
              <p className="text-base text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="publications" className="py-10 border-b-2">
        <h2 className="text-2xl mb-6">Publications</h2>

        <p className="mb-6">
          Most recent publications on{" "}
          <a
            href="https://scholar.google.com/citations?user=kHXpSd0AAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600"
          >
            Google Scholar
          </a>
        </p>

        <div className="flex space-x-4 mb-6 border-gray-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab("selected")}
            className={`pb-2 text-sm font-medium whitespace-nowrap ${
              activeTab === "selected"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Selected
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-2 text-sm font-medium whitespace-nowrap ${
              activeTab === "all"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            All Papers
          </button>
        </div>

        <ul className="space-y-6">
          {filteredPubs.map((pub, index) => (
            <li
              key={index}
              className={`border-l-4 ${
                pub.selected ? "border-blue-500" : "border-gray-300"
              } pl-4`}
            >
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-semibold text-lg text-gray-900">{pub.title}</p>
                {pub.bestPaperAward && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-300 whitespace-nowrap">
                    Best Paper Award
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">{pub.authors}</p>
              <p className="text-sm italic text-gray-500 mb-1">
                {pub.venue}, {pub.year}
              </p>
              <div className="flex space-x-4 text-sm">
                <a
                  href={pub.paperLink}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Paper
                </a>
                {pub.codeLink && (
                  <a
                    href={pub.codeLink}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section id="contact" className="py-10 border-b-2">
        <h2 className="text-2xl mb-6">Contact</h2>

        <div className="space-y-4 text-gray-700 text-base">
          <p>
            I'm always happy to connect. Feel free to reach out via email or
            follow me on my other platforms:
          </p>

          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <img src={mail} alt="email" className="h-5 w-5 flex-shrink-0" />
              <a
                href="mailto:sjoerdvink@icloud.com"
                className="hover:underline text-blue-600 break-all"
              >
                sjoerdvink@icloud.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src={github}
                alt="GitHub"
                className="h-5 w-5 flex-shrink-0"
              />
              <a
                href="https://github.com/sjoerdvink99"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-blue-600 break-all"
              >
                github.com/sjoerdvink99
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-5 w-5 flex-shrink-0"
              />
              <a
                href="https://www.linkedin.com/in/sjoerdvink/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-blue-600 break-all"
              >
                linkedin.com/in/sjoerdvink
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src={medium}
                alt="Medium"
                className="h-5 w-5 flex-shrink-0"
              />
              <a
                href="https://sjoerdvink.medium.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-blue-600 break-all"
              >
                sjoerdvink.medium.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="py-4 text-center text-xs text-gray-400">
        <p>
          © {new Date().getFullYear()} Sjoerd Vink · Design inspiration from{" "}
          <a
            href="https://faculty.washington.edu/msaveski/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-500 transition"
          >
            Martin Saveski
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
