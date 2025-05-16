import React from 'react'

function Banner({bannerimg}) {
  return (
    <div className="relative md:h-[80vh]">
      <div className="sm:h-[10vh] md:h-[80vh] sm:w-full flex flex-row opacity-80 -z-1 bg-center overflow-hidden bg-black"
     style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${bannerimg.poster_path}`,backgroundRepeat:"no-repeat",
      backgroundSize:"cover",backgroundPosition:"0% 25%",backgroundFit:"cover"
         }}>
       <div className="sm:h-[10vh] absolute md:h-[80vh] w-full inset-0 bg-black opacity-60 -z-1 text-black">
       </div>
       <div className='flex flex-row justify-center m-20 w-full'>
        <img className='sm:h-[5vh] md:h-[60vh]  w-[47%] pl-10 ' src={`https://image.tmdb.org/t/p/original/${bannerimg.poster_path}`}></img>
        <div className='text-balck text-center  w-[50%] items-center m-30' style={{color:"white",fontSize:"60px" }}>{bannerimg.original_title}</div>
        
       </div>
   
    </div>
    </div>
  )
}

export default Banner
