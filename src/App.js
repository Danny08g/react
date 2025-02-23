import React from 'react';
import './App.css';
import CourseCard from './components/CourseCard'; // Course Preview Card
import TeacherDashboard from './components/TeacherDashboard'; // Teacher Dashboard
import StudentDashboard from './components/StudentDashboard'; // Student Dashboard

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./logo.svg' className="App-logo" alt="logo" />
        <h1>Welcome to Skill Bridge</h1>
      </header>
      <div className="content">
        <CourseCard />
        <TeacherDashboard />
        <StudentDashboard />
      </div>
    </div>
  );
}

export default App;
