
const Footer = () => {
  return (
    <div className="bg-[#131A1B] flex flex-col items-center justify-center">
        <div className="flex flex-col md:gap-12 gap-5 items-center justify-center md:py-72 py-36">
         <h1 className="text-white md:text-9xl text-5xl font-medium ">Let&apos;s create <br /> the remarkable</h1>
         <button className="bg-white hover:bg-slate-300 transition duration-300 font-medium border-0 outline-0 px-3 py-2 rounded-md text-black justify-center">Get in Touch</button>
        </div>
        <div className="flex items-center w-full justify-between px-10 pb-5">
          <div className="flex items-center gap-4">
           <a href="#" className="text-white font-medium hover:text-gray-400 transition duration-200">Instagram</a> 
           <a href="#" className="text-white font-medium hover:text-gray-400 transition duration-200">YouTube</a> 
           <a href="#" className="text-white font-medium hover:text-gray-400 transition duration-200">Linkedin</a> 
          </div>
          <p className="text-white font-medium">@2024 Remarkable</p>
        </div>
    </div>
  )
}

export default Footer