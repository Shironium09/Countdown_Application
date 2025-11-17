import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerInterval = null;

    if (isRunning) {
      timerInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else {
          setIsRunning(false);
        }
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, hours, minutes, seconds]);

  const handleHoursChange = e => {
    const value = parseInt(e.target.value) || 0;
    setHours(Math.min(Math.max(value, 0), 99));
  };

  const handleMinutesChange = e => {
    const value = parseInt(e.target.value) || 0;
    setMinutes(Math.min(Math.max(value, 0), 59));
  };

  const handleSecondsChange = e => {
    const value = parseInt(e.target.value) || 0;
    setSeconds(Math.min(Math.max(value, 0), 59));
  };

  const handleStart = () => {
    if (hours > 0 || minutes > 0 || seconds > 0) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <>
      <div className='main_container'>
        <div className='countdown_container'>
          <div className='timer_display'>
            <div className='hour_container timer_container'>
              <input
                type='number'
                value={hours}
                onChange={handleHoursChange}
                disabled={isRunning}
                className='time_input'
                min='0'
                max='99'
              />
              <h3>Hours</h3>
            </div>
            <h1>:</h1>
            <div className='minute_container timer_container'>
              <input
                type='number'
                value={minutes}
                onChange={handleMinutesChange}
                disabled={isRunning}
                className='time_input'
                min='0'
                max='59'
              />
              <h3>Minutes</h3>
            </div>
            <h1>:</h1>
            <div className='second_container timer_container'>
              <input
                type='number'
                value={seconds}
                onChange={handleSecondsChange}
                disabled={isRunning}
                className='time_input'
                min='0'
                max='59'
              />
              <h3>Seconds</h3>
            </div>
          </div>

          <div className='button_container'>
            {!isRunning ? (
              <button onClick={handleStart} className='start_btn'>
                Start
              </button>
            ) : (
              <button onClick={handlePause} className='pause_btn'>
                Pause
              </button>
            )}
            <button onClick={handleReset} className='reset_btn'>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
