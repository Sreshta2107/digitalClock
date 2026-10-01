import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let timer

    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [running])

  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  return (
    <div className="clock">
      <h1>Digital Clock Timer</h1>

      <div className="timer">
        {String(hours).padStart(2, '0')}:
        {String(minutes).padStart(2, '0')}:
        {String(secs).padStart(2, '0')}
      </div>

      <div className="buttons">
        <button className="start" onClick={() => setRunning(true)}>
          Start
        </button>

        <button className="pause" onClick={() => setRunning(false)}>
          Pause
        </button>

        <button
          className="stop"
          onClick={() => {
            setRunning(false)
            setSeconds(0)
          }}
        >
          Stop
        </button>
      </div>
    </div>
  )
}

export default App