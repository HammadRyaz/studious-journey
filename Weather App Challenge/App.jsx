import React from "react"

/* Challenge

The weather data is currently hardcoded into the JSX. Your task is to insert it via JavaScript so the app can be dynamic. 
      
    1. Based on whether the day is currently set to Monday, Tuesday, or Wednesday, the app should 
       use state to automatically display the correct items for the following:
        - background image
        - emoji icon (☀️, 🌧️, or ❄️)
        - weather condition
        - low & high temperatures
        - day of the week
    
    2. When you click on the test button, the app should show all of the correct items listed above 
       for the next day in the weatherData array, cycling through the pattern: Monday -> Tuesday -> Wednesday -> Monday, etc. 
    
    3. The weatherData array can be moved, but it should not be otherwise modified. 
       
    4. The code should be modular and well-organized. 
*/

export default function App() {
  
  const weatherData = [
    {
      id: 0,
      day: "Monday",
      condition: "Sunny",
      lowTemp: 20,
      highTemp: 38
    },
    {
      id: 1,
      day: "Tuesday",
      condition: "Rainy",
      lowTemp: 8,
      highTemp: 15
    },
    {
      id: 2,
      day: "Wednesday",
      condition: "Snowy",
      lowTemp: -5,
      highTemp: 3
    }
  ]
  
  return (
    <div className="app-container sunny-background"> 
      <div className="weather-container">
        <div className="icon">☀️</div>
        <div className="condition-text">Sunny</div>
        <div className="temp-range-container">
            <div className="low-temp-container">
              <p className="low-temp-data">20°</p>
              <p>Low</p>
            </div>
            <div className="high-temp-container">
              <p className="high-temp-data">38°</p>
              <p>High</p>
            </div>
        </div>
        <div className="day">Monday</div>
      </div>
      <button>Test</button>
    </div>
  )
}