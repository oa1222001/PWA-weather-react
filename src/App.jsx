import React , {useState} from 'react'
import fetchWeather from './api/fetchWeather'
import './App.css'
const App = () => {
    const [city, setCity] = useState('New York')
    const [weather, setWeather] = useState({})
    const inputHandler = (e)=>{
        setCity(e.target.value)
    }
    const search = async ()=>{
        if(city){
            const data = await fetchWeather(city);
            console.log(data);
            setWeather(data);
            setCity('')
        }
        
    }
  return (

    <div className='main-container'>
        <input 
        value={city}
        type='text'
        className='search'
        placeholder='Search...'
        onChange={inputHandler}
        onKeyPress={(e)=>{
            if(e.key === 'Enter'){
                search()
            }
        }}
        />
        <button 
        className='btn'
        onClick={search}
        >Find</button>
        {weather?.main ? (
            <div className='city'>
                <h2 className='city-name'>
                    <span>{weather.name}</span>
                    <sup>{weather.sys.country}</sup>
                </h2>
                <div className="city-temp">
                    {Math.round(weather.main.temp)}
                    <sup>&deg;</sup>
                </div>
                <div className="info">
                    <img className='city-icon' alt={weather.weather[0].description} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                    <p>{weather.weather[0].description}</p>
                </div>
            </div>
        ):(weather?null:<div className='city'>
        <h2 className='city-name'>
            <span>invalid input or api may be expired</span>
        </h2>
        </div>)}
    </div>
  )
}

export default App