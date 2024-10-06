import React, { useEffect, useState } from 'react'
import axios from 'axios';

 const API_KEY=import.meta.env.REACT_APP_GIPHY_API_KEY;
function Random() {

    const [gif,setGif]=useState("")
  


  async function fetchData(){
    const url =`https://api.giphy.com/v1/gifs/random?api_key=tVPJzA3gUCmNfFbBcsI6eOyNAWNHy470`;
    const {data}=await axios.get(url);
   const imageSource=data.data.images.downsized_large.url;
  setGif(imageSource);


  }
  useEffect( () =>{
    fetchData();
  },[])
    function clickHandler(){
fetchData();
    }
    
  return (
    <div className='w-1/2 h-[500px] bg-green-500 mt-28 rounded-lg border border-black  flex-col text-center
    items-center gap-y-5 '>
      <h1 className='text-2xl underline uppercase font-bold'> A Random Gifs</h1>
      <img src={gif} className='w-[425px] h-[350px] items-center justify-center ml-40 mt-5'/>
      <button
      onClick={clickHandler}
      className='w-10/12 bg-yellow-50 text-lg py-2 rounded-lg mt-5'
      >Generate</button>
    </div>

  )
}

export default Random
