//  make app jsx 
import mainlogo from "./assets/logo/main-logo.png"; 
import './App.css';
import React from 'react';
function App() {
  return (
  <>
    <section className='whats-new'> 
      <div className="main-logo-container">
     <img className="main-logo-new-section" src={mainlogo} />
      </div>
 
      <p className="whats-new-title">What's New in TogrulOS?</p>
    <p className="whats-new-description">Simpler. Smarter. Greener.
  TogrulOS is built to consume less power, extend battery life, and reduce hardware stress.
  No background bloat. No unnecessary services. Just pure efficiency.
  Use less, do more.
  TogrulOS – maximum efficiency with minimum impact.</p>
    </section>


    <section className="features">
      <div className="features-container">
        <div className="feature-item">
          <h2>Lightweight Design</h2>
          <p>Optimized for speed and efficiency, TogrulOS runs smoothly on low-end hardware.</p>
        </div>
        <div className="feature-item">
          <h2>Power Management</h2>
          <p>Advanced power-saving features to extend battery life and reduce energy consumption.</p>
        </div>
        <div className="feature-item">
          <h2>Minimal Bloatware</h2>
          <p>No unnecessary applications or services, ensuring a clean and fast user experience.</p>
        </div>
      </div>
      and sooooo continue

    </section>
    </>
  );
}
export default App;