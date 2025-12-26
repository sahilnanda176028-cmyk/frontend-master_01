import React from "react";
import "./Resources.css";

const Resources = () => {
    return (
        <section className="resources container py-5">
            <h2 className="text-center fw-bold mb-3">Explore Our Comprehensive English Learning Resources for Every Level</h2>
            <p className="text-center text-muted mb-4">
                Learn English effectively with curated materials for every level.
            </p>

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card text-center shadow-sm border-0 p-4 h-100">
                        <h4 className="fw-bold mb-2 text-success">Grammar Guides</h4>
                        <p>Master English grammar with simple rules, practical examples, detailed explanations, and engaging activities designed for beginners to advanced learners.
                            Master English grammar with clear and simple rules, helpful examples, daily exercises.
                        </p>
                        <button className="btn btn-info">View Lessons</button>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center shadow-sm border-0 p-4 h-100">
                        <h4 className="fw-bold mb-2 text-success">Vocabulary Builder</h4>
                        <p>Learn new words every day with exciting exercises, memory techniques, and context-based practice to improve your English.”

                            “Enhance your vocabulary with daily word lessons, interactive activities, and practical exercises designed for all levels..</p>
                        <button className="btn btn-info">Start Now</button>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center shadow-sm border-0 p-4 h-100">
                        <h4 className="fw-bold mb-2 text-success">Speaking Practice</h4>
                        <p>Boost your confidence with real conversation practice, interactive speaking exercises, and feedback from experts.”

                            “Improve your fluency and boost your confidence with daily conversation practice and real-life speaking activities..</p>
                        <button className="btn btn-info">Join Session</button>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center shadow-sm border-0 p-4 h-100">
                        <h4 className="fw-bold mb-2 text-success">Listening Exercises</h4>
                        <p>Sharpen your listening comprehension with engaging audio content, dialogues, and interactive exercises.”

                            “Develop strong listening skills with real-life audio exercises, quizzes, and practice materials.
                            “Develop strong listening skills with real-life audio exercises, quizzes, and practice materials.</p>
                        <button className="btn btn-info">Listen Now</button>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center shadow-sm border-0 p-4 h-100">
                        <h4 className="fw-bold mb-2 text-success">Writing Tips</h4>
                        <p>Improve your writing with expert guidance on grammar, sentence structure, and writing style.”

                            “Master English writing through structured lessons, style guides, and interactive practice activities.”

                            “Boost your writing skills with step-by-step guidance, examples, and practical exercises</p>
                        <button className="btn btn-info">Explore</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center shadow-sm border-0 p-4 h-100">
                        <h4 className="fw-bold mb-2 text-success">Learning Tips</h4>
                        <p>“Learning English effectively requires daily practice and consistency. Set achievable goals and review your lessons regularly to retain knowledge. Focus on grammar rules and expand your vocabulary by learning new words every day, using synonyms, antonyms context-based exercises.</p>
                        <button className="btn btn-info">Start Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resources;
