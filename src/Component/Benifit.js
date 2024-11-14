import React from 'react';
import './css/Benifit.css';

function Benifit() {
  return (
    <div className="main-cont">
      <h1 className="title">The Online Benefits of Manipal</h1>

      <div className="content-cont">
        <div className="left-cont">
          {Array(6).fill().map((_, index) => (
            <div key={index} className="Details">
              <h6>Degree from top-ranked Manipal University</h6>
              <p>Our placement cell aims to uplift the employability quotient of students interested in finding career opportunities after completion of their programs.</p>
            </div>
          ))}
        </div>

        <div className="right-cont">
          <img src="https://www.onlinemanipal.com/wp-content/uploads/2024/07/OM-Advanatages-Desktop.jpg" alt="Manipal Benefits" />
        </div>
      </div>
    </div>
  );
}

export default Benifit;
