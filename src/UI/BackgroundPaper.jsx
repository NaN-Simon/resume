import React from 'react';

const BackgroundPaper = () => {
  return (
    <div
      className='position-absolute top-0 start-0 bg-warning z-index-1'
      style={{
        zIndex: -1,
        width: '24%',
        height: '30%',
        maxWidth: '300px',
        maxHeight: '460px',
        minHeight: '500px',
      }}
    ></div>
  );
};

export default BackgroundPaper;
