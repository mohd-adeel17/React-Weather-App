import React, { useEffect, useState } from 'react'
import Weathercard from './weathercard'
import './style.css'
const Temp = () => {
    const [searchValue , setSearchValue] = useState("Meerut")
    const [tempInfo,setTempInfo] = useState({});
    const getWeatherInfo = async()=>{
        try{
           let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=cb749178cc727a1441cb1962e04d8053`

           let res= await fetch(url);
           let data= await res.json();
           const {temp , humidity , pressure} = data.main;
           const {main:weatherMood} = data.weather[0];
           const { name } = data;
           const {speed} = data.wind;
           const {country , sunset} = data.sys;

           const MyNewWeatherInfo = {
            temp , humidity , pressure,weatherMood,name ,speed,country , sunset
           }

           setTempInfo(MyNewWeatherInfo);
           console.log(temp);

        }
        catch(error){
           console.log(error)
        }
    }
    useEffect(()=>{
        getWeatherInfo();
    },[]);
  return (

    <>
      <div className="wrap">
        <div className="search"> 
            <input type="search" placeholder='Enter your city' autoFocus id='search' className='searchItem' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <button className="searchButton" type='button' onClick={getWeatherInfo} >Search</button>
        </div>
      </div>

      <Weathercard tempInfo ={tempInfo}/>

     

    </>
  )
}

export default Temp
