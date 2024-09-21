import "/src/css/App.css";
import "/src/index.css";
import Navb from "/src/components/Navbar/desktop/Navbar.jsx";
import "/src/css/port.css";
import "/src/js/port.js";

export default function Port() {
  return (
    <div className="hidden lg:block font-thin text-stone-800 bg-white">
      <Navb />

      {/* ------------- main content -------------- */}

      <div className="min-h-dvh w-full px-5 tracking-widest flex flex-col justify-center">
        {/* Home */}

        <div className="w-full flex justify-center" id="Homed">
          <div className="flex items-center w-full min-h-svh gap-10 px-36  justify-center">
            <div className="w-2/3 max-w-fit basis-2/3 flex flex-col gap-8 px-14 ">
              <div className="flex items-end gap-2">
                <div className="text-2xl font-light text-slate-900 fade-in fade-in-delay-1">
                  Hi I am
                </div>
                <div className="text-5xl font-semibold italic text-sky-400 sway">
                  "MARK"
                </div>
              </div>
              <div className="text-6xl font-black mt-4 fade-in fade-in-delay-2">
                RATTIPONG
              </div>
              <div className="text-6xl font-bold  fade-in fade-in-delay-3">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SAKUNJEEN
              </div>
              <div className="flex flex-col gap-4 mt-4 fade-in fade-in-delay-4 ">
                <div>I am a computer engineering student at</div>
                <div>
                  King Mongkut's University of Technology Thonburi (KMUTT)
                </div>
              </div>
            </div>
            <div className="basis-1/3 w-1/3 max-w-fit grid justify-items-start">
              <img src="/images/mypic.png" className="slide-in" />
            </div>
          </div>
        </div>

        {/* aboutme */}
        <div className="w-full flex justify-center " id="AboutMed">
          <div className="flex items-center justify-center w-full min-h-svh gap-24 px-32">
            <div className=" basis-2/4 w-1/2 grid justify-items-end">
              <img src="/images/aboutme.png" alt="" className="" />
            </div>

            <div className="flex flex-col gap-8 basis-2/4">
              <div className="text-7xl font-black flex gap-4">
                <div>About </div>
                <div className="text-sky-400 bounce">Me</div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div>Date of Birth: July 28, 2004</div>
                <div>Gender: Male</div>
                <div>
                  Nationality: Thai , Ethnicity: Thai , Religion: Buddhism
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="text-sky-400">Address</div>
                <div>47 Moo 4 Khlong Khoi , Photharam Ratchaburi 70120</div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="text-sky-400">Education</div>
                <div>
                  Computer Engineering King Mongkut's University of Technology
                  Thonburi (KMUTT)
                </div>
                <div className="grid justify-items-end mt-4 text-sky-400">
                  {" "}
                  GPA 3.47
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills*/}
        <div className="w-full flex justify-center" id="Skillsd">
          <div className="flex items-center w-full min-h-svh gap-24 px-40 overflow-hidden">
            <div
              className="flex flex-col w-full gap-8"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
              }}
            >
              <div className="flex justify-center gap-8 w-full animate-moveRight">
                {["php","c", "python", "java", "go","php" ].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center justify-center rounded-full shadow-inner"
                    style={{ width: "8vw", height: "8vw" }}
                  >
                    <img
                      src={`/images/${tech}.svg`}
                      alt={tech}
                      className="w-3/5 h-3/5"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-12 w-full animate-moveLeft">
                {["js", "html", "css", "node", "sql","js"].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center justify-center rounded-full shadow-inner"
                    style={{ width: "8vw", height: "8vw" }}
                  >
                    <img
                      src={`/images/${tech}.svg`}
                      alt={tech}
                      className="w-3/5 h-3/5"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-12 w-full animate-moveRight">
                {[
                  "react",
                  "vite",
                  "laravel",
                  "tailwind",
                  "daisyui",
                  "bootstrap",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="flex  items-center justify-center rounded-full shadow-inner"
                    style={{ width: "8vw", height: "8vw" }}
                  >
                    <img
                      src={`/images/${tech}.svg`}
                      alt={tech}
                      className="w-3/5 h-3/5"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-12 w-full animate-moveLeft">
                {["oracle", "figma", "unity", "mysql", "mongodb"].map(
                  (tech) => (
                    <div
                      key={tech}
                      className="flex items-center justify-center rounded-full shadow-inner"
                      style={{ width: "8vw", height: "8vw" }}
                    >
                      <img
                        src={`/images/${tech}.svg`}
                        alt={tech}
                        className="w-3/5 h-3/5"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="w-full flex justify-center " id="Projectsd">
          <div className="flex justify-center items-center w-full min-h-svh gap-24 px-32  ">
            <div className="flex flex-col w-fulll gap-16">
              <div className="flex justify-center gap-2  text-7xl font-black ">
                <div className="text-sky-400 w-64 ">
                  <div className="content">
                    <h2>Project</h2>
                    <h2>Project</h2>
                  </div>
                </div>
                <div>Experience</div>
              </div>
              <div className="flex h-full justify-center gap-4 text-sm">
                <a
                  href="https://tworlds.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/3 min-h-full hover:opacity-90 bg-red-100"
                >
                  <div className="card bg-white-100 image-full h-full flex flex-col">
                    <figure className="flex-shrink-0">
                      <img
                        src="/images/card_tw.svg"
                        className="w-full h-48 object-cover"
                      />
                    </figure>
                    <div className="card-body flex-grow flex flex-col justify-between">
                      <h2 className="card-title text-sky-200 text-4xl">
                        Tworlds
                      </h2>
                      <p className="leading-loose mt-4">
                        ( Game 2D puzzle ) <br /> <br />
                        Tworlds is a puzzle-solving adventure game where players
                        take on the role of a ghost trying to escape from a
                        mystical forest. Along the way, they must solve various
                        puzzles to uncover the path to freedom. The game
                        challenges players to think in both the real world and
                        the spirit world, creating a unique, immersive
                        experience.
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/RattipongMark/sunkub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/3 min-h-full hover:opacity-90"
                >
                  <div className="card bg-base-100 image-full h-full flex flex-col">
                    <figure className="flex-shrink-0">
                      <img
                        src="/images/card_sk.svg"
                        className="w-full h-48 object-cover"
                      />
                    </figure>
                    <div className="card-body flex-grow flex flex-col justify-between">
                      <h2 className="card-title text-sky-200 text-4xl">
                        SUNKUB
                      </h2>
                      <p className="leading-loose mt-4">
                        ( Stock Trading Website ) <br /> <br />
                        <li>
                          Covering all stages from initial database design to
                          data querying.
                        </li>
                        <li>Use Laravel Framework and MySQL</li>
                        <li>
                          Position: Fullstack Developer (specialized in Back-end
                          development, including data querying and function
                          creation).
                        </li>
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/RattipongMark/Visualization-and-Modeling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/3 min-h-full hover:opacity-90"
                >
                  <div className="card bg-base-100 image-full h-full flex flex-col">
                    <figure className="flex-shrink-0">
                      <img
                        src="/images/card_vm.svg"
                        className="w-full h-48 object-cover"
                      />
                    </figure>
                    <div className="card-body flex-grow flex flex-col justify-between">
                      <h2 className="card-title text-sky-200 text-4xl">
                        Visual & Modeling
                      </h2>
                      <p className="leading-loose mt-4">
                        ( Visualization and Modeling of E-commerce Customer
                        Churn ) <br /> <br />
                        This is part of the Data Models course (CPE 232),
                        involving the creation of EDA, visualization, and
                        modeling using an e-commerce customer churn dataset.{" "}
                        <br />
                        <br />
                        Modeling using four methods: <br />
                        <ol>
                          <li>1. Decision Tree</li>
                          <li>2. Logistic Regression</li>
                          <li>3. K-Neighbors Classifier</li>
                          <li>4. Random Forest Classifier</li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="w-full flex justify-center" id="Activitiesd">
          <div className="flex flex-col justify-center items-center w-full min-h-svh gap-8 px-32 ">
            <div className="flex justify-items-start w-full pl-4 text-7xl font-black">
              <div>ACTIVIT</div>
              <div className="text-sky-400">IES</div>
            </div>
            <div  tabIndex={0} className="collapse collapse-arrow bg-white shadow-lg px-4 py-4">
              <div className="collapse-title flex gap-4 py-8">
                <div className="text-xl font-black text-sky-400">
                  KIN-D YOU-D
                </div>
                <div className="text-xl font-thin">
                  ( Event : Innovation for KMUTT Sustainability 2024 )
                </div>
              </div>

              <div className="collapse-content w-full  ">
                <div>
                  <p>
                    A platform that recommends foods for each meal and
                    calculates the nutrients your body needs each day.{" "}
                  </p>{" "}
                </div>
                <div className="flex w-full h-94 gap-4 mt-8">
                  <div className="w-1/2">
                    <img src="/images/POSTER_KIND.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-4  justify-between w-1/2">
                    <div className="w-full">
                      <img src="/images/kind.png" alt="" />
                    </div>
                    <div className=" w-full">
                      <img src="/images/kind-3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div  tabIndex={0} className="collapse collapse-arrow bg-white shadow-lg px-4 py-4">
              <div className="collapse-title flex gap-4 py-8">
                <div className="text-xl font-black text-sky-400">
                  SUMMER SCHOOL ON QUANTUM COMPUTING 2024
                </div>
              </div>

              <div className="collapse-content w-full  ">
                <div>
                  <p>
                    The Summer School on Quantum Computing 2024 is a short-term
                    program designed to provide participants with knowledge on
                    the fundamentals and technologies related to quantum
                    computing. Topics include basic quantum principles, quantum
                    algorithms, and their applications in various fields,
                    featuring lectures and hands-on sessions led by experts in
                    the field.
                  </p>{" "}
                </div>
                <div className="flex w-full h-94 gap-4 mt-8">
                  <div className="w-1/2">
                    <img src="/images/qtm-1.png" alt="" />
                  </div>
                  <div className="w-1/2">
                    <img src="/images/qtm-2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="Contactd" className="w-full flex justify-center">
          <div className="flex items-center w-full min-h-svh px-32 ">
            <div className="w-full flex gap-24">
              <div className="flex w-1/2 justify-end px-16 ">
                <div className="flex flex-col gap-8">
                  <div className="text-2xl">CONTACT DETAILS</div>
                  <div className="flex items-center gap-4 mt-4">
                    <div>
                      <img src="/images/Phone.svg" className="w-7/12" />
                    </div>
                    <div>093-0989646</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <img src="/images/Mail.svg" className="w-7/12" />
                    </div>
                    <div>Rattipong.saku@mail.kmutt.ac.th</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <img src="/images/Mail.svg" className="w-7/12" />
                    </div>
                    <div>Rattipong.mark@gmail.com</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <img src="/images/Github.svg" className="w-7/12" />
                    </div>
                    <div>
                      <a href="https://github.com/RattipongMark">
                        RattipongMark
                      </a>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="border-r-2"></div>
              <div className="flex w-1/2 justify-start px-16">
                <div className="flex flex-col gap-8">
                  <div className="text-2xl">SOCIAL</div>
                  <div className="flex items-center gap-4 mt-4">
                    <div>
                      <img src="/images/Facebook.svg" className="w-7/12" />
                    </div>
                    <div>
                      <a href="https://www.facebook.com/rattipong.mark/">
                        Rattipong Mark
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <img src="/images/Instagram.svg" className="w-7/12" />
                    </div>
                    <div>
                      <a href="https://www.instagram.com/makk.rt/">makk.rt</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
