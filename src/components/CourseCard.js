import React from 'react';

function CourseCard() {
  return (
    <div className="course-card">
      <img src="https://via.placeholder.com/150" alt="Course Thumbnail" className="course-thumbnail"/>
      <div className="course-details">
        <h3>Introduction to JavaScript</h3>
        <p>Learn JavaScript from scratch. Perfect for beginners!</p>
        <p><strong>Instructor:</strong> John Doe</p>
        <p>Rating: ⭐⭐⭐⭐ 4.5/5</p>
        <button>Enroll Now</button>
      </div>
    </div>
  );
}

export default CourseCard;
