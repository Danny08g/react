import React from 'react';

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <h2>Your Progress</h2>
      <div className="course-card">
        <h3>Introduction to JavaScript</h3>
        <p>Status: In Progress</p>
        <p>Progress: 40%</p>
        <button>Resume</button>
      </div>
      <div className="course-card">
        <h3>Advanced React</h3>
        <p>Status: Completed</p>
        <p>Progress: 100%</p>
        <button>Review</button>
      </div>
    </div>
  );
}

export default StudentDashboard;
