import { useState } from 'react'
import React,{useEffect} from 'react'
import Card from './Card'
import axios from 'axios'
import Pgination from './Pgination'
function Movies({fun,remove,data}) {
  const[movie,setmovie]=useState([])
  const[page,setpage]=useState(1)

  const moveback=()=>{
    if(page==1){
      setpage(1)
    }
    else{
    setpage(page-1)
    }
  }
  const movefront=()=>{
    setpage(page+1)
  }
  useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=REMOVED&language=en-US&page=${page}`).then((res)=>{
   // console.log("details",res.data.results);
    setmovie(res.data.results)
  },[page])
})
  return (
    <div className=' py-4'>
      <div className='text-2xl text-center m-5 font-bold'>
     Trending movies
     </div>
     <div className="flex flex-row flex-wrap justify-around m-5">
      {movie.map((m)=>
  
      <Card key={m.id} poster_path={m.poster_path} moviename={m.original_title} mov={m} myfunction={fun} myremovefun={remove} movielist={data}/>)
      }
     
     </div>
     <Pgination p={page} front={movefront} back={moveback}/>
    </div>
  )
}

export default Movies
