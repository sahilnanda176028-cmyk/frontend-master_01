import React from "react";
import "./Courses.css";

const Courses = () => {
  const courses = [
    {
       title :" Spoken English Booster",
      description: "Speak confidently with real-world conversation practice and live sessions.",
      icon: "",
    },
    {
      title: " Grammar Pro Course",
      description: "Master grammar naturally through stories and interactive examples.",
      icon: "",
    },
    {
      title: " Pronunciation Clinic",
      description: "Refine your accent and sound fluent using our AI voice trainer.",
      icon: "",
    },
    {
      title: " Business English Edge",
      description: "Communicate professionally in interviews, meetings, and presentations.",
      icon: "",
    },
    {
      title: " IELTS Prep Masterclass",
      description: "Achieve your dream band score with practice and personalized feedback.",
      icon: "",
    },
    {
      title: " Vocabulary Challenge",
      description: "Learn 10 new words every day through fun quizzes and examples.",
      icon: "",
    },
  ];

  return (
    <section className="courses-section">
      <h1 className="courses-heading">Learn to Speak English Fluently and Confidently</h1>
      <p className="courses-subtitle">
        Level up your English fluency with interactive lessons and real speaking practice.
      </p>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="icon">{course.icon}</div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button>Join Now</button>
          </div>
        ))}
      </div>
      <br />
      <br />
      
        <div className="footer-bottom">
        <p>© 2025 EngDing. All Rights Reserved.</p>
      </div>
    </section>
    
  );
};

export default Courses;
