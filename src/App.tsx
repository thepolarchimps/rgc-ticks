import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from 'react-google-charts';

const hz = 'Hz'
const dbhl = 'dBHL'

const options = {
  title: 'Testing',
  // curveType: "function",
  backgroundColor: 'transparent',
  hAxis: {
    title: `Frequency (${hz})`
  },
  chartType: 'Line', 
  containerId: 'ting', 
  pointSize: 10,
  animation: {
    duration: 500,
    startup: true,
    easing: 'linear',
  },
  vAxis: {

    legend: { position: 'bottom' },
    titleTextStyle: {
      textAlign: 'center'
    },
    viewWindow: {
      max: -130,
      min: 10,
    },
    title: `Hearing Loss (${dbhl})`,
    //     ticks: [
//       10,
//       -10,
//       -30,
//       -50,
//       -70,
//       -90,
//       -110,
//       -130,
//     ]
    ticks: [
      { v: 10, f: `-10${dbhl}` },
      { v: -10, f: `10${dbhl}` },
      { v: -30, f: `30${dbhl}` },
      { v: -50, f: `50${dbhl}` },
      { v: -70, f: `70${dbhl}` },
      { v: -90, f: `90${dbhl}` },
      { v: -110, f: `110${dbhl}` },
      { v: -130, f: `130${dbhl}` },
    ]
  }
};

const data = [
  ["Age", "Weight"],
  [8, 12],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [6.5, 7]
];


function App() {

  const graphRef = useRef(null)
  return (
    <div className="App">
      <Chart
        ref={graphRef}
        chartType="LineChart"
        width="100%"
        height="600px"
        data={data}
        options={options}
        
      />
    </div>
  );
}

export default App;
