import React from 'react';
import loadimg from './../loading-gif.gif'

const Loader = () => {
 
    return (
      <>
      <div className="col text-center">
        <img src={loadimg} alt="" />
      </div>
        
      </>
    )
  
}

export default Loader;
