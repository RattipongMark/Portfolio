import "/src/css/App.css";
import "/src/index.css";
import Navb from "/src/components/Navbar/Navbar.jsx";
import "/src/css/port.css";

// ipad

export default function Port() {
  return (
    <div className="hidden md:block lg:hidden font-thin text-stone-800 bg-white">
      <Navb />

      {/* ------------- main content -------------- */}

      <div className="min-h-dvh w-full px-5 pt-16 tracking-widest">
        <div className="flex flex-col items-center w-full h-svh gap-10 px-16 pt-24">
          <div className="flex items-end gap-2">
            <div className="text-l font-light text-slate-900 fade-in fade-in-delay-1">
              Hi I am
            </div>
            <div className="text-3xl font-semibold italic text-sky-400 fade-in fade-in-delay-1">
              "MARK"
            </div>
          </div>
          
          <div className="text-5xl font-black fade-in fade-in-delay-2">
            RATTIPONG SAKUNJEEN
          </div>
          <img src="/src/assets/mypic.png" className="slide-in" />
          <div className="flex flex-col items-center mt-4 gap-4 fade-in fade-in-delay-4 ">
            <div>I am a computer engineering student at</div>
            <div>King Mongkut's University of Technology Thonburi (KMUTT)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
