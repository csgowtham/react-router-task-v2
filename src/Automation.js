import React from 'react';
import course_data from './courseData'; // Adjust the path as needed
import './index.css';

const Automation = () => {
  return (
    <div className="container">
      <div className="row">
        {course_data.filter(course => course.category === 'AUTOMATION').map((data, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <img src={data.img} className="card-img-top" alt={data.Title} />
              <div className="card-body">
                <h5 className="card-title">{data.Title}</h5>
                <p className="card-text">{data.Description}</p>
                <button href="#" className="btn btn-primary">Buy now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Automation;
