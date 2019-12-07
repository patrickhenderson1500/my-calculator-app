import React from 'react';
import Particles from 'react-particles-js';

export default () => (
  <div className='particles'
    style={{
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }}
  >
    <Particles
    params={{
    particles: {
      number: {
        value: 100,
      line_linked: {
        shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}
}}/>
  </div>
);
