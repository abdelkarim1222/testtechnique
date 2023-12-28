import React, { useState, useEffect } from 'react';  
import spri from "../../assets/springboot.png"
import imreact from "../../assets/react.png"
import flu from "../../assets/flutter.png"
import bus from "../../assets/business.png"
import art from "../../assets/artificial.png"
import dev from "../../assets/Devops.png"
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/courses')
            .then(response => response.json())
            .then(data => setCourses(data.courses))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);
    return (
        <div>
            <div className="heading-container">
                <h2>Discover Our Courses</h2>
                <button type="submit">View More</button>
            </div>
            <div className="course-container">
                {courses.map((course, index) => (
                    <div key={index} className="course">
                        <p>{course.name}</p>
                        <h1>{course.price} DT/ Month</h1>
                    </div>
                ))}
                <div className="course">
                    <img src={spri} alt="" />
                    <p>Spring Boot / Angular</p>
                    <h1> 350 DT/ Month </h1>
                </div>
                <div className="course">
                    <img src={imreact} alt="" />
                    <p>Node JS / React</p>
                    <h1> 350 DT/ Month</h1>
                </div>
                <div className="course">
                    <img src={flu} alt="" />
                    <p>Flutter / Firebase</p>
                    <h1> 350 DT/ Month</h1>
                </div>
            </div>
            <div className="course-container">
                <div className="course">
                    <img src={bus} alt="" />
                    <p>Business Intelligence</p>
                    <h1> 350 DT/ Month</h1>
                </div>
                <div className="course">
                    <img src={art} alt="" />
                    <p>Artificial Intelligence</p>
                    <h1> 350 DT/ Month</h1>
                </div>
                <div className="course">
                    <img src={dev} alt="" />
                    <p>Devops</p>
                    <h1> 350 DT/ Month</h1>
                </div>
            </div>
        </div>
    );
};

export default Courses;
