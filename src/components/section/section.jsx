import React from 'react';
import TrainComponent from '../TrainComponent/TrainComponent';
import './section.css';

export default function Section({direction,backgroundColor,startColor, middleColor, endColor}) {
  return (
    <div className="section" style={{
        flexDirection:`${direction}`
    }}>
      <div className="sec-con-1">
        <TrainComponent startColor={startColor} middleColor={middleColor} endColor={endColor} />
      </div>
      <div className="sec-con-2"style={{ '--background-color': backgroundColor }}>
        <div className="section-info">
        </div>
      </div>
    </div>
  );
}
