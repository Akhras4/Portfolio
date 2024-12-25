import React from 'react';
import TrainComponent from '../TrainComponent/TrainComponent';
import './section.css';

export default function Section({direction,backgroundColor,startColor, middleColor, endColor,backgroundColorInfo}) {
  return (
    <div className="section" style={{
        flexDirection:`${direction}`
    }}>
      <div className="sec-con-1" >
        <TrainComponent startColor={startColor} middleColor={middleColor} endColor={endColor} />
      </div>
      <div className="sec-con-2"style={{ '--background-color': backgroundColor }}>
        <div className="section-info" style={{ '--backgroundColorInfo': backgroundColorInfo }} >
            <div className='section-data'>
                <h1>DUCATION AND TRAINING</h1>
                <div className="first-part">
                    <h2>BACHELOR DEGREE IN ELECTRICAL ENGINEERING</h2>
                    <p>Graduated from the University of Technology in 2018 with a Bachelor's degree
                    in Electrical Engineering.</p>  
                </div>
                <div className="second-part">
                    <h2>CERTIFICATE IN COMPUTER TECHNIQUES</h2>   
                </div>
                </div>
        </div>
      </div>
    </div>
  );
}
