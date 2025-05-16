import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react';
import genre from '../utility/genre.js'
function Watchlist({list,deletefun,aftersort}) {
  
  let sortincrease=()=>{
    let increase=list.sort((mova,movb)=>{
      return mova.vote_average-movb.vote_average
    })
    aftersort([...increase])
  }

  let sortdecrease=()=>{
    let decrease=list.sort((mova,movb)=>{
      return movb.vote_average-mova.vote_average
    })
    aftersort([...decrease])
  }

  let[text,settext]=useState("")
  let handlechange=(e)=>{
    settext(e.target.value)
    console.log(text)
  };
//for genre 
let [type, settype] = useState(["all genere"]);

useEffect(() => {
  let temp = list.map((object) => genre[object.genre_ids[0]]);
  temp=new Set(temp)
  let newtype = ["all genere", ...temp];
  settype(newtype);
}, [list]);
//convert temp to set to remove duplicates

//to handle filter
function abc(filtertype){
  type.filter((fil,filtertype)=>{
    return fil.genre==filtertype;
  })
}
let handlefilter=(t)=>{

  setcurr(t)
  console.log("clciked",t)
}
const[currgenre,setcurr]=useState("all genere")


  return (
    <>
       <div className='flex justify-center m-3 flex-wrap'>
        {type.map((t)=>{
           return <div onClick={()=>{handlefilter(t)}}className={(currgenre==t)?'bg-blue-400 flex justify-center items-center text-white font-bold rounded-xl h-[3rem] w-[7rem] mx-4 my-2':'bg-gray-300 flex justify-center items-center text-white font-bold rounded-xl h-[3rem] w-[7rem] mx-4 my-2'}>{t}</div>
        })}
      {
      //<div className='bg-blue-400 flex justify-center items-center text-white font-bold rounded-xl h-[3rem] w-[7rem] mx-4'>Action</div>
      //<div className='bg-gray-300 flex justify-center items-center text-white font-bold rounded-xl h-[3rem] w-[7rem]'>Action</div>
}
    </div>
    
    <div className="flex justify-center my-4 ">
    <input type="text" className='h-[3rem] w-[18rem] bg-gray-200 px-6 rounded-s ' placeholder="Search movies" value={text} onChange={handlechange}/>
      </div>
      <div className='border overflow-hidden rounded-lg border-gray-200 m-10'>
        <table className="w-full text-gray-500 text-center">
          <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th className='flex'>
              <div className='px-2'><i class="fa-solid fa-arrow-up" onClick={sortincrease}></i></div>
              <div className='px-2'>Rating</div>
              <div className='px-2'><i class="fa-solid fa-arrow-down" onClick={sortdecrease}></i></div>
              </th>
            <th>Popularity</th>
            <th>genre</th>
          </tr>
          </thead>
          <tbody>
            
          { 
          list.filter((li)=>{
            if(currgenre==="all genere"){
              return li.original_title.toLowerCase().includes(text.toLowerCase()) 
            }
            else{
            return li.original_title.toLowerCase().includes(text.toLowerCase()) && genre[li.genre_ids[0]]==currgenre
            }
          }).map((w) => (
              <tr key={w.id}>
                <td className="flex items-center p-2">
                  <img className="h-[8rem] w-[10rem]" src={`https://image.tmdb.org/t/p/w500${w.poster_path}`} alt={w.original_title} />
                  <div className="mx-10">{w.original_title}</div>
                </td>
                <td>{w.vote_average}</td>
                <td>{w.popularity}</td>
                <td>{genre[w.genre_ids[0]]}</td>
                <td className="text-red-800 cursor-pointer" onClick={()=>deletefun(w)}>
                  Delete
                </td>
              </tr>
            ))}           
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist
