import React, { useState, useRef, useEffect } from 'react';
import './doc.css';

export default function Doc({ img }) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const dialogRef = useRef(null);
  const imgRef = useRef(null);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);
  const handleClickOutside = (e) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target) && !imgRef.current.contains(e.target)) {
      closeDialog();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="doc-img-con" onClick={openDialog} ref={imgRef}>
        <img
          src={img}
          alt="Document Preview"
        />
        <div className="overlay">
          <button
            onClick={(e) => {
              e.stopPropagation(); 
              const link = document.createElement('a');
              link.href = img;
              link.download = 'document.jpg';
              link.click();
            }}
            className="download-icon"
          >
            ⬇
          </button>
        </div>
      </div>

      {isDialogOpen && (
        <div className="dialog" ref={dialogRef}>
          <div className="dialog-content">
            <img src={img} alt="Full View" />
            <button className="close-button" onClick={closeDialog}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
