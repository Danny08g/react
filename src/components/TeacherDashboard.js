import React from 'react';

function TeacherDashboard() {
  return (
    <div className="teacher-dashboard">
      <h2>Your Courses</h2>
      <div className="course-card">
        <h3>Introduction to JavaScript</h3>
        <p>Students: 150</p>
        <p>Progress: 70%</p>
        <button>Edit Course</button>
      </div>
      <div className="course-card">
        <h3>Advanced React</h3>
        <p>Students: 200</p>
        <p>Progress: 90%</p>
        <button>Edit Course</button>
      </div>
    </div>
  );
}

export default TeacherDashboard;
