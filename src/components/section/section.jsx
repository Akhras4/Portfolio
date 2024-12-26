import React from 'react';
import TrainComponent from '../TrainComponent/TrainComponent';
import './section.css';
import Doc from './doc';

export default function Section({
  direction,
  backgroundColor,
  startColor,
  middleColor,
  endColor,
  backgroundColorInfo,
  sectionTitle,
  firstPart,
  secondPart,
}) {
 

  return (
    <div
      className="section"
      style={{
        flexDirection: `${direction}`,
      }}
    >
      <div className="sec-con-1">
        <TrainComponent startColor={startColor} middleColor={middleColor} endColor={endColor} />
      </div>
      <div className="sec-con-2" style={{ '--background-color': backgroundColor }}>
        <div className="section-info" style={{ '--backgroundColorInfo': backgroundColorInfo }}>
          <div className="section-data">
            {sectionTitle && <h1>{sectionTitle}</h1>}
            {firstPart && (
              <div className="first-part">
                <div className='title-data'>
                {firstPart.title && <h2>{firstPart.title}</h2>}
                {firstPart.companyName && <h2>{firstPart.companyName}</h2>}
                {firstPart.period && <h4>{firstPart.period}</h4>}
                </div>
                {firstPart.description }
                {firstPart.docs && firstPart.docs.length > 0 && (
                  <div className="doc-img">
                    {firstPart.docs.map((img, index) => (
                      <Doc key={index} img={img} />
                    ))}
                  </div>
                )}
              </div>
            )}
            {secondPart && (
              <div className="second-part">
                <div className='title-data'>
                {secondPart.title && <h2>{secondPart.title}</h2>}
                {secondPart.companyName && <h2>{secondPart.companyName}</h2>}
                {secondPart.period && <h4>{secondPart.period}</h4>}
                </div>
                {secondPart.description }
                {secondPart.doc && <Doc img={secondPart.doc} />}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
