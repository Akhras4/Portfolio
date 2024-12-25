import React from 'react'

export default function Railway({startColor, middleColor, endColor}) {
  return (
    <div style={{
        width:"90vw",
        height:"20vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }}>
        <div
          style={{
            marginLeft:"11%",
            height: "6px",
            width: "100%",
            background: `linear-gradient(120deg, ${startColor} 0%, ${middleColor} 50%,  ${endColor} 100%)`,
          }}
        />
      </div>

  )
}
