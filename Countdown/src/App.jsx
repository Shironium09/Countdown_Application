import { useState, useEffect } from 'react'
import './App.css'

function App() {

  // const timer = [currentTime, setCurrentTime] = useState(new Date());

  return (
    <>
      <div className="main_container">
        <div className="countdown_container">
            <div className="hour_container timer_container">
              <h1>00</h1>
              <h3>Hours</h3>
            </div>
            <h1>:</h1>
            <div className="minute_container timer_container">
              <h1>00</h1>
              <h3>Minutes</h3>
            </div>
            <h1>:</h1>
            <div className="second_container timer_container">
              <h1>00</h1>
              <h3>Seconds</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
