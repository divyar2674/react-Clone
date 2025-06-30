import React from 'react'

function Banner({bannerimg}) {
  return (
    <div className="relative md:h-[80vh]">
      <div className="sm:h-[40vh] w-full sm:bg-contain  sm:flex-col md:h-[80vh] sm:w-full flex flex-row opacity-80 -z-1 bg-center overflow-hidden bg-black"
     style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${bannerimg.poster_path}`,backgroundRepeat:"no-repeat",
      backgroundSize:"cover",backgroundPosition:"0% 25%",backgroundFit:"cover"
         }}>
       <div className="sm:h-[10vh] sm:w-full absolute md:h-[80vh] w-full inset-0 bg-black opacity-60 -z-1 text-black">
       </div>
       <div className='flex flex-row justify-center m-20 w-full sm:w-full'>
        <img className='sm:h-[auto] md:h-[60vh]  w-[47%] pl-10  rounded-lg object-contain' src={`https://image.tmdb.org/t/p/original/${bannerimg.poster_path}`}></img>
        <div className='text-white text-center flex content-center justify-center items-center  w-[50%] m-6 sm:text-lg md:text-5xl lg:text-6xl' style={{color:"white"}}>{bannerimg.original_title}</div>
        
       </div>
   
    </div>
    </div>
  )
}

export default Banner
