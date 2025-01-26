"use client"
import React, { useContext } from 'react'
import { FormContext } from './FormContext'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

const PieChart = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const {formData2} = useContext(FormContext)

    const { scores } = formData2;

    const chartData = {
        labels: ['Correct Answers', 'Incorrect Answers'],
        datasets: [
          {
            data: [scores, 15 - scores],
            backgroundColor: ['#1F509A', '#D4EBF8'],  
            borderColor: [ '#1F509A', '#D4EBF8'],
            borderWidth: 1,
          },
        ],
      };
    
  
      const chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true,
          },
        },
      };
  return (
    <div className='border-2 rounded-lg px-2 py-6 flex flex-col gap-y-2'>
        <div className='flex flex-row items-center justify-between'>
            <p className='text-[0.8rem] font-bold'>Question Analysis</p>
            <p className='text-[0.8rem] font-bold text-purple-800'>{`${formData2.scores}/15`}</p>
        </div>

        <div>
            <p className='text-[0.8rem]'><strong>{`You scored ${formData2.scores} correct out of 15.`}</strong> However, improvement is needed</p>
        </div>

        <div className='relative'>
        <Doughnut data={chartData} options={chartOptions} />
        </div>

    </div>
  )
}

export default PieChart
