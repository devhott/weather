import React, { useEffect, useState } from 'react'
import Searchbar from '../Components/Searchbar'
import List from '../Components/List'
import Error from '../Components/Error'





export default function Home() {
  const [lat,setLat]=useState(null)
  const [lon,setLon]=useState(null)
  const [error,setError]=useState("")
  useEffect(()=>{
    if ("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(function(position) {
        const { latitude, longitude } = position.coords;
        setLat(latitude);
        setLon(longitude);
      }, function(){
        setError("location cannot detected!")
      }
      )
    }
    else{
      setError("Location service is not supported in your browser!");
    }
  })
  
  
  console.log();
 return (
  <div>
  <Searchbar
  />


  { lat&&lon? (<List
  lat={lat}
  lon={lon}
  />):(<Error
  errorMessage={error}
  />)}
 
  
  </div>
)

}

