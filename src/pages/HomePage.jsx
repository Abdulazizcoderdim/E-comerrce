import Header from "../components/Header"

const HomePage = () => {
  return (
    <div className="w-full relative md:h-[100vh] h-auto">
        <video autoPlay loop muted playsInline className="absolute w-full sm:h-auto top-0  bottom-0 -z-10">
            <source src="../../public/251dd1b9-0601e1df.mp4" type="video/mp4"/>
         </video>
        <div className="container md:px-10 px-5 md:h-[100vh] h-auto w-full flex flex-col sm:gap-20 gap-0">
         <Header/>
         <div className="flex flex-wrap md:mt-16 mt-10 justify-between">
            <div className="flex flex-col md:gap-5 gap-3">
                <p className="md:text-7xl sm:text-5xl text-3xl leading-11 text-white font-[500]">Helping authentic <br /> brands create <br /> <span className="font-normal ">connections</span></p>  
                <div className="flex gap-2 items-center">
                    <button className="border-0 outline-0 md:py-2 py-1 md:px-4 px-2 md:text-[20px] text-[13px] rounded-md bg-white text-gray-900 hover:bg-white/10 hover:text-white transition duration-200">Our Portfolio</button>
                    <button className="border-0 outline-0 md:py-2 py-1 md:px-4 px-2 md:text-[20px] text-[13px] rounded-md bg-gray-700 text-white hover:bg-white/10 transition duration-200">Get in Touch</button>
                </div>
            </div>
            <div className="md:flex hidden">
               <div className="flex flex-col justify-start gap-3 md:w-96 w-52 ">
                <img className=" object-cover" src="../../public/Fgima project4.png" alt="" />
                <div className="flex items-center justify-between">
                    <p className="text-white md:text-xl text-lg cursor-pointer">BloomCraft</p>
                    <span className="text-white md:text-xl text-lg cursor-pointer">✔</span>
                </div>
               </div>
            </div>
         </div>
         <div className="flex items-center font-semibold w-full text-white">
            <span className="md:text-[10rem] text-4xl items-center justify-center">Remarkable</span>
         </div>
      </div>
    </div>
  )
}

export default HomePage