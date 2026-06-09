import React, { useState, useRef, useEffect } from "react"

export default function StopWatch() {
    
  const [time, setTime] = useState(0)           
  const [isRunning, setIsRunning] = useState(false)  
  const timerRef = useRef(null)
  
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true)
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    }
  }
  
  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false)
      clearInterval(timerRef.current)
    }
  }
  
  const resetTimer = () => {    
    setIsRunning(false)
    clearInterval(timerRef.current)
    setTime(0)
  }

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:
            ${seconds.toString().padStart(2, '0')}:
            ${milliseconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          ⏱️ Stopwatch
        </h1>
        
        <div className="text-6xl font-mono text-center text-cyan-400 mb-10 py-6 bg-gray-700 rounded-xl">
          {formatTime(time)}
        </div>

        <div className="flex gap-4 justify-center">
          {!isRunning ? (
            <button 
              onClick={startTimer}
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all transform hover:scale-105"
            >
              ▶️ Start
            </button>
          ) : (
            <button 
              onClick={stopTimer}
              className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all transform hover:scale-105"
            >
              ⏸️ Stop
            </button>
          )}
          
          <button 
            onClick={resetTimer}
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all transform hover:scale-105"
          >
            🔄 Reset
          </button>
        </div>

        <div className="mt-8 p-4 bg-gray-700 rounded-lg">
          <p className="text-gray-400 text-sm text-center">
            Status: 
            <span className={isRunning ? "text-green-400 ml-2" : "text-red-400 ml-2"}>
              {isRunning ? "Running 🔄" : "Stopped ⏹️"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}