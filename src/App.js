import './App.css';
import Input from './components/Input';
import { useState } from 'react';
import Weather from './components/Weather';
import Titles from './components/Titles';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

function App() {

  const [city, setCity] = useState('')
  const [temp, setTemp] = useState('')
  const [desc, setDesc] = useState('')
  const [error, setError] = useState('')

  const apiKey = '6cd7cf7d2b382628d349e274f0371b7a'
  
  const getWeather = async (e) => {
      e.preventDefault()
      const city = e.target.elements.city.value;
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      if(response.status === 200){
        const weather = await response.json()
        const cityName = weather.name
        const temperature = parseInt(weather.main.temp - 273.15)
        const weatherDesc = weather.weather[0].description
        const error = ''
        setCity(cityName)
        setTemp(temperature)
        setDesc(weatherDesc)
        setError(error)
      }
      else{
        setCity('')
        setTemp('')
        setDesc('')
        setError('Please enter a valid city')
      }
  }

  const myStyle = {
    height: "625px",
    backgroundColor: "#d6e1f4"
  }

  return (
    <div className="App">
      <Card>
        <Card.Body style={myStyle}>
          <Card.Title><Titles /></Card.Title>
          <Card.Text>
            <Input getWeather={getWeather}/>
            <br/>
            <Weather 
              city={city} 
              temp={temp}
              desc={desc} 
              error={error}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
