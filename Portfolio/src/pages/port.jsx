import '/src/css/App.css';
import '/src/index.css';
import Navb from '/src/components/Navbar/Navbar.jsx';
import '/src/css/port.css'

// mobile

export default function Port() {
  return (
    <div className='md:hidden font-thin text-stone-800 bg-white'>
      <Navb />

      {/* ------------- main content -------------- */}

      <div className='min-h-dvh w-full px-5 tracking-widest'>
        <div className='flex items-center w-full h-svh gap-10 px-36'>
          <div className='basis-2/3 flex flex-col gap-5 w-full px-14'>
            <div className='flex items-end gap-2'>
                <div className='text-2xl font-light text-slate-900 fade-in fade-in-delay-1'>
                  Hi I am
                </div>
                <div className='text-5xl font-semibold italic text-sky-400 fade-in fade-in-delay-1'>
                  "MARK"
                </div>
            </div>
            <div className='text-7xl font-black mt-4 fade-in fade-in-delay-2'>
              RATTIPONG
            </div>
            <div className='text-7xl font-bold grid justify-items-end fade-in fade-in-delay-3'>
              SAKUNJEEN
            </div>
            <div className='flex flex-col gap-4 mt-4 fade-in fade-in-delay-4 '>
              <div>I am a computer engineering student at</div>
              <div>King Mongkut's University of Technology Thonburi (KMUTT)</div>
            </div>
          </div>
          <div className='basis-1/3 grid justify-items-start'>
            <img src="/src/assets/mypic.png" className='slide-in'/>
          </div>
        </div>
      </div>

    </div>
  );
}
