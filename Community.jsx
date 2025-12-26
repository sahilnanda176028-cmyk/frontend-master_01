import React from 'react';
import './Community.css';

const Community = () => {
  return (
    <section className="community">
      <div className="container">
       
        <h2 className='text-center p-4'>Join Our Learning Community</h2>

        {/* <p>
          Connect with learners from around the world, share your progress, and improve your English skills together. 
          Participate in discussions, join live sessions, and take part in fun challenges to boost your fluency.
        </p> */}

        <div className="community-grid">
          <div className="card">
            <h4>Discussion Forums</h4>
            <p>Chat with learners about grammar, vocabulary, and tips.</p>
          </div>
          
          <div className="card">
            <h4 className='text-danger'>Live Sessions</h4>
            <p>Participate in real-time speaking and listening practice.</p>
          </div>
          
          <div className="card">
            <h4 className='text-success'>Group Challenges</h4>
            <p>Compete in fun language challenges and quizzes in Groups.</p>
          </div>
         
          <div className="card border-1">
            <h4 className='text-warning'>Peer Feedback</h4>
            <p>Share your writing and get constructive feedback from others.</p>
          </div>
          
          <div className="card">
            <h4 className='text-secondary'>Events & Meetups</h4>
            <p>Join online events, webinars, and workshops for learners.</p>
          </div>
           <div className="card">
            <h4 className='text-dark'>Daily Practice Group</h4>
            <p>Join daily speaking, reading, and writing groups to improve your English with consistency.</p>
          </div>
        </div>

        {/* <p className="community-end-text text-dark">
          Our community is a friendly space where learners motivate each other, share experiences, and celebrate achievements. 
          Whether you want to improve your speaking, writing, or listening, you'll find support and guidance every step of the way.
        </p> */}
      </div>
    </section>
  );
}

export default Community;
