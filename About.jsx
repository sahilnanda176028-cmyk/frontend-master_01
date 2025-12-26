import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='about'>
      <div className='about-container'>
        <h1 className='text-center fw-bold'>“Empowering You to Speak English with Confidence”</h1>
        <p className='text-Right'>
          EngDing is an online English learning platform that helps learners speak fluently and confidently through interactive lessons and expert guidance.
          Our courses focus on real-life conversations, grammar, and pronunciation improvement.
          Whether you're a beginner or advanced learner, EngDing makes English learning simple, flexible, and effective for everyone.
          Our platform offers personalized lessons, real-time feedback, and supportive tutors.
        </p>

        <p>
          English is not just a language — it’s a bridge to the world.
          EngDing helps you cross that bridge by offering easy-to-understand lessons, friendly tutors, and real-life speaking practice.
          Build your confidence, connect globally, and let your words make an impact
          We help learners of all levels build confidence, improve pronunciation, and speak English fluently through interactive lessons and one-on-one sessions with expert tutors.
          Our goal is to make learning English fun, flexible, and effective — anytime, anywhere.

        </p>
        <Link to="/courses">
          <button className='btn btn-primary border-3 text-center text-light'>Start Learning Now</button>


        </Link>

      </div>
    </section>
  )
}

export default About
