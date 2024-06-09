import axios from "axios"
import { useState } from "react"



function Weather(){

    const [city,setcity] = useState()
    
    const [weather,setweather] = useState()
    const [desc,setdesc] = useState()
    const [temp,settemp] = useState()

    const handleCity = (e)=> {
        setcity(e.target.value)
    }

    const getWeather = ()=> {
        
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f10fcd067b59d193a320c1438f0254f0`)

        weatherdata.then((success)=> {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
        })
    }

    return(
        <div className="bg-black p-16">
         <div className="bg-green-500 p-5 rounded-md flex flex-col gap-3">
         <h1 className="font-medium text-3xl">Weather Report</h1>
         <p className="">Lorem ipsum dolor sit amet.</p>
         <input type="text" onChange={handleCity} name="" id="" className="w-64 rounded-sm p-1  border border-black outline-none" />
         <button className="max-w-fit bg-black text-white p-2 rounded-md" onClick={getWeather} >Get Report</button>

         <p>Weather:{weather}</p>
         <p>Temperature:{temp}</p>
         <p>Description:{desc}</p>
       </div>
        </div>
      
    )
}



export default Weather