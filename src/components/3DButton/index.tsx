import React from 'react';
import './index.less';

const Button_3D =  () => {
  return (
    <button className="pushable">
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">
        Push me
      </span>
    </button>
  )
}


export default Button_3D;
