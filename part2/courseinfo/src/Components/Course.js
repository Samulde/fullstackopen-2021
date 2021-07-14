import React from 'react';
import Header from './Header'
import Content from './Content'


const Course = ({ courses }) => {
    return (
        <div>
        {courses.map(course => {
        return (
            <>
                <Header text={course.name} />
                <Content content={course.parts} />
            </>
        )})}
        </div>
    )
}


export default Course;