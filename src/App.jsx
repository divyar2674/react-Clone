import { useState } from 'react'
import {useEffect} from 'react'
import Movies from './parts/Movies.jsx'
import Watchlist from './parts/Watchlist.jsx'
import Navbar from './parts/Navbar.jsx'
import './App.css'
import axios from 'axios'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Banner from './parts/Banner.jsx'
function App(){
  //for darkmode
  let[mode,setmode]=useState("light")
 
  function handlemode(){
    if(mode=="light"){
      setmode("dark")
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      return
    }
    else{
      setmode("light")
       document.body.style.backgroundColor="white";
      document.body.style.color="black";
      return
    }
  }
  let[watchlists,setwatchlist]=useState([])
  let handleclick=(movie)=>{
    console.log("handleclick started previous watchlist",watchlists)
    let newwatchlist=[...watchlists,movie]
    localStorage.setItem('moviestorage',JSON.stringify(newwatchlist))
    setwatchlist(newwatchlist)
    console.log(newwatchlist)
  }
  let[banner,setbanner]=useState({})
  useEffect(()=>{
    if (watchlists.length === 0) {
    setbanner("");
    return;
  } 
     let postercard=watchlists.reduce((prev,current)=>{
            let a=Number(prev.vote_average) || 0;
            let b=Number(current.vote_average) ||0;
            return a>b?prev:current
    })
    setbanner(postercard)
    console.log(postercard)
  },[watchlists])
  
  let handleremove=(movie)=>{
    let filteredlist=watchlists.filter((mov)=>{
      return mov.id != movie.id
    })
    localStorage.setItem('moviestorage',JSON.stringify(filteredlist))
    setwatchlist(filteredlist)
  }

    //to store watchlists arrray of objects in local storage
    useEffect(()=>{
      let storage=localStorage.getItem('moviestorage');
      if (!storage) {
        return
      }
      setwatchlist(JSON.parse(storage))
    },[]);

    
  return (
    <div>
    <BrowserRouter>
      <Navbar tomode={handlemode}/>
        <Routes>
         <Route path='/' element={<><Banner bannerimg={banner}/><Movies fun={handleclick} remove={handleremove} data={watchlists}/></>}/>
         <Route path='/watchlist' element={<Watchlist list={watchlists}originallist={watchlists} deletefun={handleremove} aftersort={setwatchlist}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App