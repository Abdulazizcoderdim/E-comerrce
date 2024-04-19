const modal = [
  {
    id: 1,
    title: "Branding",
    text: "Designing memorable brands for lasting impressions",
    date: "04/07/23",
    icon: "✔",
  },
  {
    id: 2,
    title: "Web Design",
    text: "Crafting responsive designs for user engagement",
    date: "04/07/23",
    icon: "✔",
  },
  {
    id: 3,
    title: "Development",
    text: "Navigating website development & codeing intuitively and with AI",
    date: "04/07/23",
    icon: "✔",
  }
]

const InsightBlog = () => {
  return (
    <div className="w-full bg-blue-100 ">
       <div className="md:px-10 px-5 flex flex-col">
           <h1 className="font-semibold mt-20 md:text-6xl text-5xl">Insights from 
           <span className="text-gray-800 font-normal"> our blog</span>
           </h1>
           <div className="sm:flex sm:flex-nowrap flex-wrap gap-3 my-16 ">
              {modal.map(item => (
                <div className="flex justify-between md:w-1/3 w-full h-96 md:mb-0 mb-3 bg-white shadow-md rounded-lg flex-col gap-7 p-5" key={item.id}>
                  <div className="flex flex-col gap-8">
                    <span className="text-black w-28 bg-lime-300 font-medium py-2 px-2 flex justify-center rounded-lg">{item.title}</span>
                    <p className="text-black text-3xl w-96 font-medium">{item.text}</p>
                  </div>

                   <div className="flex items-center justify-between w-full">
                     <span className="font-medium cursor-pointer">{item.date}</span>
                     <span className="font-medium cursor-pointer">{item.icon}</span>
                   </div>
                </div>
              ))} 
           </div>
           
       </div>
    </div>
  )
}

export default InsightBlog