import React from 'react';

const Lollipop = () => {
  const stylesLollipop = {
    display: 'flex',
    justifyContent: 'center',
    height: '100%'
  }
  const stylesLollipopBall = {
    width: '15px',
    height: '15px',
    borderRadius: '100px',
    border: '2px solid #DEC802',
    background: 'inherit',
  };
  const stylesStick = {
    width: '1.826px',
    height: 'calc(100% - 18px)',
    background: '#DEC802',
    transform: 'translate(-10px, 18px)',
  }
  return <div style={stylesLollipop} className='d-none d-md-flex'>
    <div className='lollipopBall' style={stylesLollipopBall}></div>
    <div className='lollipopStick' style={stylesStick}></div>
  </div>;
};

export default Lollipop;
