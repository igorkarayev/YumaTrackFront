import React from 'react'
import './style.scss'
// @ts-ignore
import {Bar} from 'react-chartjs-2';


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 100, 81, 56, 55, 40]
    }
  ]
};

const Analytics = (): any =>{
  return <div className='analYtics_wrapper'>
    Analytics
    <div>
      <h2>Bar Example (custom size)</h2>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>

  </div>
}

export default Analytics