import React from 'react';
import learnImage from './learn.jpeg';
export default function Webs() {
  return (
    <>
      <div className="main-content">
        <div className="content">
          <h1>Web Development</h1>
          <p>Welcome to our Web Development section where you can<br/>find resources and guides to enhance your skills.</p>
        </div>
        <div className="content-image">
          <img src={learnImage} alt="Web Development" />
        </div>
      </div>
    </>
  );
}
