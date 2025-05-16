import React from 'react'

function Card({mov,poster_path,moviename,myfunction,myremovefun,movielist}) {
  let contain=(mov)=>{
      for(let i of movielist){
       if(i.id==mov.id){
        return true;
       } 
      }
      return false;
    }
  return (
    
      <div className="m-3 h-[40vh] w-[200px] bg-cover bg-center border border-transparent justify-between flex flex-col rounded-xl hover:cursor hover:scale-110 transition-transform duration:1000ms" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
        {contain(mov)?<div className='mx-40 my-5 flex justify-center items-center rounded-lg bg-black h-8 w-8' onClick={()=>{myremovefun(mov)}}>
        &#x274C;
       </div>:
      <div className='mx-40 my-5 flex justify-center items-center rounded-lg bg-black h-8 w-8' onClick={()=>{myfunction(mov)}}>
        &#128525;

      </div>}
      <div className="text-white text-center text-xl w-full p-2 mt-auto bg-gray-900/60">{moviename}</div>
      </div>
    
  )
}

export default Card
