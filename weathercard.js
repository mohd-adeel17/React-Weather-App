import React, { useEffect, useState } from 'react'

const Weathercard = ({tempInfo}) => {
    const [weatherIcons , setWeatherIcons ] = useState("");

    
    const {temp , humidity , pressure,weatherMood,name ,speed,country , sunset} = tempInfo;

    useEffect(()=>{
        if(weatherMood){
            switch (weatherMood){
                case "Clouds" : setWeatherIcons("wi-day-cloudy");
                break;
                case "Sunny" : setWeatherIcons("wi-day-sunny");
                break;
                case "Rain" : setWeatherIcons("wi-day-rain");
                break;
                case "Mist" : setWeatherIcons("wi-dust");
                break;
                case "Haze" : setWeatherIcons("wi-fog");
                break;
                default:setWeatherIcons("-wi-day-sunny");
                break;
            }
        }

    },[weatherMood])

    let time = sunset;
    let date = new Date(time*1000) ;
    let timeStr = `${date.getHours()}:${date.getMinutes()} PM`

  return (
    <>
       <article className="widget">
        <div className="weatherIcon">
            <i className={`wi ${weatherIcons}`}></i>
        </div>

        <div className="weatherInfo">
            <div className="temperature"><span>{temp}&deg;</span></div>
            <div className="description">
                <div className="weatherCondition">{weatherMood}</div>
                <div className="place">{name},{country}</div>
            </div>
        </div>

        <div className="date">{new Date().toLocaleString()}</div>

        <div className="extra-temp">
            <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p > <i className= "wi wi-sunset"  id='humid'></i></p>
                    <p className='extra-info-leftside'>{timeStr} <br/> sunset</p>
                </div>
                <div className="two-sided-section">
                    <p > <i className='wi wi-humidity' id='humid'></i></p>
                    <p className='extra-info-leftside'>{humidity} <br/>humidity</p>
                </div>
                
                
            </div>
            <div className="weather-extra-info">
            <div className="two-sided-section">
                    <p > <i className='wi wi-rain'  id='humid'></i></p>
                    <p className='extra-info-leftside'>{pressure} <br/>pressure</p>
                </div>
                <div className="two-sided-section">
                    <p > <i className='wi wi-strong-wind'  id='humid'></i></p>
                    <p className='extra-info-leftside'>{speed} <br/>speed</p>
                </div>
            </div>
        </div>
      </article>
    </>
  )
}

export default Weathercard;
