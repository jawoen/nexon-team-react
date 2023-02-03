import React from 'react';
import './Mainpage.css';
import { Carousel } from 'antd';
const Mainpage = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    margin:"200px"
  };

  return (
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
          <video preload="auto" poster="" muted="muted" autoplay="autoplay" loop="loop">
             <source src="/video/Hit2.mp4" type="video/mp4" />
          </video>
        </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <video preload="auto" poster="" muted="muted" autoplay="autoplay" loop="loop">
        <source src="/video/ProjectD.mp4" type="video/mp4" />
      </video>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <video preload="auto" poster="" muted="muted" autoplay="autoplay" loop="loop">
        <source src="/video/BlueArchive.mp4" type="video/mp4" />
      </video>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <video preload="auto" poster="" muted="muted" autoplay="autoplay" loop="loop">
        <source src="/video/ProjectMagnum.mp4" type="video/mp4" />
      </video>
      </h3>
    </div>
  </Carousel>
    //   <div className='main_1'>
    //     <div className='video1'>
    //       <video preload="auto" poster="" muted="muted" autoplay="autoplay" loop="loop">
    //         <source src="/video/Hit2.mp4" type="video/mp4" />
    //       </video>
    //     </div>
    //     <div className='video2'>
    //       <video preload="auto" poster="" muted="muted" autoplay="autoplay" loop="loop">
    //         <source src="/video/ProjectD.mp4" type="video/mp4" />
    //       </video>
    //     </div>
    //     <div className='video3'>
    //       <video preload="auto" poster="" muted="muted" autoplay="autoplay" loop="loop">
    //         <source src="/video/BlueArchive.mp4" type="video/mp4" />
    //       </video>
    //     </div>
    //     <div className='video4'>
    //       <video preload="auto" poster="" muted="muted" autoplay="autoplay" loop="loop">
    //         <source src="/video/ProjectMagnum.mp4" type="video/mp4" />
    //       </video>
    //     </div>
    // </div>
  );
};







export default Mainpage;
