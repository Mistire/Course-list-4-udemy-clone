// CourseList.js
import React from "react";
import CourseListItem from "./CourseListItem";

const CourseList = () => {
  // Sample data for demonstration
  const courses = [
    {
      instructorImg: "https://randomuser.me/api/portraits/men/1.jpg",
      courseName: "React Fundamentals",
      rating: 4,
      enrolledStudents: "150,000",
      subscriptionFee: 49.99,
      totalHours: 20,
      dateUpdated: "2024-05-10",
      isBestseller: false,
    },
    {
      instructorImg: "https://randomuser.me/api/portraits/women/2.jpg",
      courseName: "Advanced React Techniques",
      rating: 5,
      enrolledStudents: "2,000,000",
      subscriptionFee: 69.99,
      totalHours: 30,
      dateUpdated: "2024-05-09",
      isBestseller: true,
    },
    // Add more sample courses as needed
  ];

  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <CourseListItem key={index} {...course} />
      ))}
    </div>
  );
};

export default CourseList;
