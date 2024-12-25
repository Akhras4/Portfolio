import React from 'react'
import TrainComponent from '../TrainComponent/TrainComponent'
import "./section.css"

export default function Partsections({backgroundColor,startColor, middleColor, endColor}) {
  return (
    <div className='part-section-con'>
            <div className='sec-con 'style={{ '--background-color': backgroundColor }}>
              <div className='data-left'>

              </div>
            </div>

            <TrainComponent startColor={startColor} middleColor={middleColor} endColor={endColor} />

           <div className='sec-con 'style={{ '--background-color': backgroundColor }}>
            <div className='data-right'></div>
           </div>
    </div>
  )
}
