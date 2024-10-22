import "/src/css/App.css";
import "/src/index.css";
import Navb from "/src/components/Navbar/ipad/Navbar.jsx";
import "/src/css/port.css";

// ipad

export default function Port() {
  return (
    <div className="hidden md:block lg:hidden font-thin text-stone-800 bg-white">
      <Navb />

      {/* ------------- main content -------------- */}

      <div className="min-h-dvh w-full px-2 tracking-widest flex flex-col justify-center">
        {/* Home */}

        <div className="w-full flex justify-center" id="Homep">
          <div className="flex flex-col  items-center justify-center w-full min-h-svh  px-24 relative gap-16">
            <div className="w-full flex flex-col gap-8  justify-center ">
              <div className="flex items-end gap-2 justify-center">
                <div className="text-2xl font-light text-slate-900 fade-in fade-in-delay-1">
                  Hi I am
                </div>
                <div className="text-4xl font-semibold italic text-sky-400 sway">
                  "MARK"
                </div>
              </div>
              <div className="text-4xl font-black  fade-in fade-in-delay-2 w-full flex justify-center">
                RATTIPONG SAKUNJEEN
              </div>
              {/* <div className="text-6xl font-bold  fade-in fade-in-delay-3 ">
                SAKUNJEEN
              </div> */}
            </div>
            <img src="/images/mypic.png" className="slide-in w-7/12 " />
            <div className="flex flex-col justify-center gap-4 mt-2 fade-in fade-in-delay-4  ">
              <div className=" flex  justify-center">
                I am a computer engineering student at
              </div>
              <div className=" flex  justify-center">
                King Mongkut's University of Technology Thonburi (KMUTT)
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex justify-center">
          <div className="h-0.5 bg-stone-100 w-2/3 rounded-lg"></div>
        </div>
        {/* aboutme */}
        <div className="w-full flex justify-center " id="AboutMep">
          <div className="flex flex-col items-center justify-center w-full min-h-svh gap-8 px-24">
            <div className="flex flex-col gap-8 ">
              <div className="text-5xl font-black flex gap-4">
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
            <div className="w-full grid justify-items-center">
              <img src="/images/aboutme_p.png" alt="" className="" />
            </div>
          </div>
        </div>
        <div className="w-full  flex justify-center">
          <div className="h-0.5 bg-stone-100 w-2/3 rounded-lg"></div>
        </div>
        {/* Skills*/}
        <div className="w-full flex justify-center" id="Skillsp">
          <div className="flex items-center w-full min-h-svh gap-24 px-16 overflow-hidden">
            <div
              className="flex flex-col w-full gap-12"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
              }}
            >
              <div className="flex justify-center gap-4 w-full animate-moveRight">
                {["php", "c", "python", "java", "go", "php"].map((tech) => (
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

              <div className="flex justify-center gap-4 w-full animate-moveLeft">
                {["js", "html", "css", "node", "sql", "js"].map((tech) => (
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

              <div className="flex justify-center gap-4 w-full animate-moveRight">
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

              <div className="flex items-center justify-center gap-4 w-full animate-moveLeft">
                {["oracle", "figma", "unity", "mysql", "mongodb", "oracle"].map(
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
        <div className="w-full flex justify-center " id="Projectsp">
          <div className="flex justify-center items-center w-full min-h-svh gap-24 px-24">
            <div className="flex flex-col w-full gap-4">
              <div className="flex justify-center text-5xl font-black flex-wrap">
                <div className="text-sky-400 w-48">
                  <div className="content">
                    <h2>Project</h2>
                    <h2>Project</h2>
                  </div>
                </div>
                <div>Experience</div>
              </div>
              <div className="flex flex-col justify-center gap-12 text-sm mt-12">
                <a
                  href="https://tworlds.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <div
                    className="relative bg-cover bg-center  shadow-lg rounded-lg overflow-hidden flex items-center transition-all duration-300 hover:scale-105"
                    style={{ backgroundImage: 'url("/images/card_tw.svg")' }}
                  >
                    {/* เลเยอร์สีดำและเบลอ */}
                    <div className="absolute inset-0 bg-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:bg-slate-800/50 hover:backdrop-blur-2xl"></div>

                    {/* ข้อความ */}
                    <div className="relative p-6 text-white w-full z-10">
                      <h2 className="card-title text-sky-200 text-2xl">
                        Tworlds
                      </h2>
                      <p className="leading-loose mt-4">
                        ( Game 2D puzzle ) <br /> <br />
                        <p>
                          Tworlds is a puzzle-solving adventure game where
                          players take on the role of a ghost trying to escape
                          from a mystical forest. Along the way, they must solve
                          various puzzles to uncover the path to freedom. The
                          game challenges players to think in both the real
                          world and the spirit world, creating a unique,
                          immersive experience.
                        </p>
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/RattipongMark/sunkub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <div
                    className="relative bg-cover bg-center  shadow-lg rounded-lg overflow-hidden flex items-center transition-all duration-300 hover:scale-105"
                    style={{ backgroundImage: 'url("/images/card_sk.svg")' }}
                  >
                    {/* เลเยอร์สีดำและเบลอ */}
                    <div className="absolute inset-0 bg-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:bg-slate-800/50 hover:backdrop-blur-2xl"></div>

                    {/* ข้อความ */}
                    <div className="relative p-6 text-white w-full z-10">
                      <h2 className="card-title text-sky-200 text-2xl">
                        SUNKUB
                      </h2>
                      <p className="leading-loose mt-4">
                        ( Stock Trading Website ) <br /> <br />
                        covering all stages from initial database design to data
                        querying.
                        <li>Use LaravelFramework and MySQL</li>
                        <li>
                          Position: Fullstack Developer (specialized in
                          Back-end)
                        </li>
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/RattipongMark/Visualization-and-Modeling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <div
                    className="relative bg-cover bg-center  shadow-lg rounded-lg overflow-hidden flex items-center transition-all duration-300 hover:scale-105"
                    style={{ backgroundImage: 'url("/images/card_vm.svg")' }}
                  >
                    {/* เลเยอร์สีดำและเบลอ */}
                    <div className="absolute inset-0 bg-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:bg-slate-800/50 hover:backdrop-blur-2xl"></div>

                    {/* ข้อความ */}
                    <div className="relative p-6 text-white w-full z-10">
                      <h2 className="card-title text-sky-200 text-2xl">
                        Visual & Modeling
                      </h2>
                      <p className="leading-loose mt-4">
                        ( Visualization and Modeling of E-commerce Customer
                        Churn ) <br />
                        Involves the creation of EDA, visualization, and
                        modeling using an e-commerce customer churn dataset.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="w-full flex justify-center my-16" id="Activitiesp">
          <div className="flex flex-col justify-center items-center w-full min-h-svh gap-8 px-24">
            <div className="flex justify-items-start w-full pl-4 text-5xl font-black">
              <div>ACTIVIT</div>
              <div className="text-sky-400">IES</div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-white shadow-lg px-4 py-4"
            >
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

            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-white shadow-lg px-4 py-4"
            >
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
        <div className="w-full  flex justify-center">
          <div className="h-0.5 bg-stone-100 w-2/3 rounded-lg"></div>
        </div>
        {/* Contact */}
        <div className="w-full flex justify-center" id="Contactp">
          <div className="flex items-center justify-center w-full min-h-svh px-32 ">
            <div className="w-full flex flex-col justify-center w-full gap-16 px-16">
              <div className="flex w-full">
                <div className="flex flex-col gap-8">
                  <div className="text-xl">CONTACT DETAILS</div>
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
              </div>
              <div className="flex w-full">
                <div className="flex flex-col gap-8">
                  <div className="text-xl">SOCIAL</div>
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
