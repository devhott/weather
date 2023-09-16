import React, { useEffect, useState } from 'react'
import Card from './Card';
import Error from './Error';



  
  
export default function List({lat,lon}) {
  const API_URL='https://api.openweathermap.org/data/2.5/'
  const APIkey=process.env.REACT_APP_API_KEY;
  const [data,setData]=useState(null)
  
  
  useEffect(()=>{
    if (lat!= null&& lon!=null){
       fetch(`${API_URL}/weather/?&lat=${lat}&lon=${lon}&units=metric&APPID=${APIkey}`)
       .then(response=>response.json())
       .then(data=>setData(data))

  }
},[])
console.log(data);

  
  
  // console.log(response)
  
  return (
    
    <section className="vh-20 cardclass">
      {data? (<Card
      data={data}
      />
  ):
  (
  <Error
  errorMessage="hata"/>
    )
  }

    
  
</section>
  )
}
