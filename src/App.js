import { useEffect, useState } from 'react';
import './App.css';

const trafficLights = {
  red: {
    color: 'red',
    bgColor: 'red',
    waitTime: 4000,
    nextColor: 'green'
  },
  yellow: {
    color: 'yellow',
    bgColor: 'yellow',
    waitTime: 500,
    nextColor: 'red'
  },
  green: {
    color: 'green',
    bgColor: 'green',
    waitTime: 3000,
    nextColor: 'yellow'
  }
}

function App() {

  const [currentColor, setcurrentColor] = useState('red')

  useEffect(() => {
    console.log(currentColor)
    const timer = setTimeout(() => {
      setcurrentColor(trafficLights[currentColor]?.nextColor)
    }, trafficLights[currentColor]?.waitTime);
    //cleanup
    return () => {
      clearTimeout(timer)
    }
  }, [currentColor])

  return (
    <div className='main__Container'>
      <div className='grid'>
        {Object.keys(trafficLights).map((color) => {
          return (
            <div key={color} className='trafficLight' style={{ backgroundColor: color === currentColor ? trafficLights[color].bgColor : undefined }}></div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
