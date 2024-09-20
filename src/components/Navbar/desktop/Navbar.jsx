import { useState, useEffect } from "react";
import "/src/css/App.css";
import "/src/index.css";
import "/src/components/Navbar/Navbar.css";

export default function Navb() {
  const [activeTab, setActiveTab] = useState("Home");

  const sections = ["Homed", "AboutMed", "Skillsd", "Projectsd", "Activitiesd", "Contactd"];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150;  // ปรับค่านี้ตามความสูงของ navigation bar
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveTab(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="navbar bg-white/70 backdrop-blur fixed px-2 lg:px-5 text-stone-500 font-thin z-50">
      <div className="navbar-start ">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            aria-label="Toggle navigation"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeTab === section ? "active" : ""}
                >
                  {section.replace(/d$/, "").replace(/([A-Z])/g, " $1").trim()}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">My Portfolio</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10 px-1 ">
          {sections.map((section) => (
            <li key={section}>
              <a
                className={activeTab === section ? "active" : ""}
                onClick={() => setActiveTab(section)}
                href={`#${section}`}
              >
                {section.replace(/d$/, "").replace(/([A-Z])/g, " $1").trim()}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-sm bg-sky-400 hover:bg-sky-700 text-white font-light border-0" href="/images/Rattipong_CV.pdf" download="Rattipong_CV.pdf">
          Download CV
        </a>
      </div>
    </div>
  );
}
