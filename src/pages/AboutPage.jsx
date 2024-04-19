const AboutPage = () => {
  return (
    <div className="w-full bg-[#131A1B] pb-16">
      <div className="md:px-10 px-5 w-full flex flex-col">
        <div className="w-full flex flex-wrap md:h-96 h-auto md:gap-0 gap-5 md:mt-20 mt-10 justify-between">
          <div className="flex flex-col  md:gap-10 gap-5">
            <div className="flex gap-2 items-center">
              <span className="w-5 h-5 bg-green-500 rounded-full"></span>
              <p className="flex items-center text-white">Portfolio Spolight</p>
            </div>
            <p className="md:text-6xl text-5xl font-medium text-white">
              Recent <br /> projects
            </p>
            <button className="border-0 w-24 outline-0 px-3 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-800">
              View All
            </button>
          </div>

          <div className="flex gap-4 flex-wrap">
            <div className="w-72 flex items-start relative group">
              <img
                className="rounded-md  object-cover h-80"
                src="../../public/abou1.png"
                alt=""
              />
              <span className="absolute bottom-[67px] left-0  flex items-center w-full justify-between px-3">
                <p className="text-white font-medium text-xl cursor-pointer">
                  Elder Tech
                </p>
                <span className="text-white text-xl mr-4 cursor-pointer">
                  ✔
                </span>
              </span>
            </div>
            <div className="w-72 flex items-end relative">
              <img
                className="rounded-md object-cover h-80"
                src="../../public/abou2.png"
                alt=""
              />
              <span className="absolute bottom-[2px] left-0  flex items-center w-full justify-between px-3">
                <p className="text-white font-medium text-xl cursor-pointer">
                  Elder Tech
                </p>
                <span className="text-white text-xl mr-4 cursor-pointer">
                  ✔
                </span>
              </span>
            </div>
            <div className="w-72 flex items-center justify-center relative">
              <img
                className="rounded-md object-cover h-80"
                src="../../public/about3.png"
                alt=""
              />
              <span className="absolute bottom-[35px] left-0  flex items-center w-full justify-between px-5">
                <p className="text-white font-medium text-xl cursor-pointer">
                  Elder Tech
                </p>
                <span className="text-white text-xl mr-1 cursor-pointer">
                  ✔
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-20 md:h-[80vh] h-auto sm:gap-0 gap-5 items-center flex-wrap justify-between">
          <div className="flex gap-5 justify-center flex-col">
            <div className="flex gap-2 items-center">
              <span className="w-5 h-5 bg-green-500 rounded-full"></span>
              <p className="text-white">Our Philosophy</p>
            </div>
            <h1 className="text-white md:text-6xl text-5xl">
              Humo-centric <br />{" "}
              <span className="text-lime-300">strategies</span>
              to cut <br />{" "}
              <span className="font-normal">through the noise</span>
            </h1>
            <button className="border-0 md:w-32 w-24 md:text-[18px] text-10px rounded-md outline-0 px-2 py-3 bg-gray-700 text-white hover:bg-gray-800">
              Our Story
            </button>
          </div>
          <div className="md:w-[90vh] md:h-[70vh] w-[75vh] h-[50vh] flex justify-end">
            <img
              className="object-cover h-full object-center"
              src="../../public/Fgma project21.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
